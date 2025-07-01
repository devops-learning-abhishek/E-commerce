package com.abhishek.ecommerce_backend.service.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.abhishek.ecommerce_backend.config.JwtProvider;
import com.abhishek.ecommerce_backend.domain.USER_ROLE;
import com.abhishek.ecommerce_backend.model.Cart;
import com.abhishek.ecommerce_backend.model.Seller;
import com.abhishek.ecommerce_backend.model.User;
import com.abhishek.ecommerce_backend.model.VerificationCode;
import com.abhishek.ecommerce_backend.repository.CartRepository;
import com.abhishek.ecommerce_backend.repository.SellerRepository;
import com.abhishek.ecommerce_backend.repository.UserRepository;
import com.abhishek.ecommerce_backend.repository.VerificationCodeRepository;
import com.abhishek.ecommerce_backend.request.LoginRequest;
import com.abhishek.ecommerce_backend.request.SignupRequest;
import com.abhishek.ecommerce_backend.response.AuthResponse;
import com.abhishek.ecommerce_backend.service.AuthService;
import com.abhishek.ecommerce_backend.service.EmailService;
import com.abhishek.ecommerce_backend.utils.OtpUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final CartRepository cartRepository;
    private final JwtProvider jwtProvider;
    private final VerificationCodeRepository verificationCodeRepository;
    private final EmailService emailService;
    private final CustomUserServiceImpl customUserServiceImpl;
    private final SellerRepository sellerRepository;

    @Override
    public String createUser(SignupRequest req) throws Exception {
            
        VerificationCode verificationCode = verificationCodeRepository.findByEmail(req.getEmail());

        if(verificationCode==null || !verificationCode.getOtp().equals(req.getOtp())){
            throw new Exception("Wrong otp....");
        }

        User user = userRepository.findByEmail(req.getEmail());

        if(user==null){
            User createdUser = new User();
            createdUser.setEmail(req.getEmail());
            createdUser.setFullname(req.getFullName());
            createdUser.setRole(USER_ROLE.ROLE_CUSTOMER);
            createdUser.setMobile("9736452780");
            createdUser.setPassword(passwordEncoder.encode(req.getOtp()));

            user = userRepository.save(createdUser);
            
            Cart cart = new Cart();
            cart.setUser(user);
            cartRepository.save(cart);
        }

        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(USER_ROLE.ROLE_CUSTOMER.toString()));

        Authentication authentication = new UsernamePasswordAuthenticationToken(req.getEmail(),null, authorities);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        return jwtProvider.generateToken(authentication);
    }

    @Override
    public void sentLoginOtp(String email, USER_ROLE role) throws Exception {
        String SIGNIN_PREFIX = "signin_";

        if(email.startsWith(SIGNIN_PREFIX)){
            email = email.substring(SIGNIN_PREFIX.length());

            if(role.equals(USER_ROLE.ROLE_SELLER)){
                Seller seller = sellerRepository.findByEmail(email);
                if (seller == null) {
                    throw new Exception("Seller not found..");
                }
            }
            else{
                User user = userRepository.findByEmail(email);
                if(user==null){
                    throw new Exception("User does not exist with provided email");
                }
            }
            
        }

        VerificationCode isExist = verificationCodeRepository.findByEmail(email);

        if(isExist!=null){
            verificationCodeRepository.delete(isExist);
        }

        String otp = OtpUtil.generateOtp();

        VerificationCode verificationCode = new VerificationCode();

        verificationCode.setOtp(otp);
        verificationCode.setEmail(email);
        verificationCodeRepository.save(verificationCode);

        String subject = "ZyraCart login/signup OTP";
        String text = "Please enter your OTP "+ otp + " in your Signin/Signup window. Do not share the OTP or your number with anyone including ZyraCart personnel.";

        emailService.senVerificationOtpEmail(email, otp, subject, text);
    }

    @Override
    public AuthResponse signin(LoginRequest req) {
        // throw new UnsupportedOperationException("Unimplemented method 'signin'");
    
        String username = req.getEmail();
        String otp = req.getOtp();

        Authentication authentication = authenticate(username,otp);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        
        String token = jwtProvider.generateToken(authentication);

        AuthResponse authResponse = new AuthResponse();
        authResponse.setJwt(token);
        authResponse.setMessage("Login successfull");

        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        String roleName = authorities.isEmpty()? null : authorities.iterator().next().getAuthority();

        authResponse.setRole(USER_ROLE.valueOf(roleName));

        return authResponse;
    }

    private Authentication authenticate(String username, String otp) {
        
        UserDetails userDetails = customUserServiceImpl.loadUserByUsername(username);
        
        String SELLER_PREFIX = "seller_";
        if(username.startsWith(SELLER_PREFIX)){
            username = username.substring(SELLER_PREFIX.length());
        }

        if(userDetails==null){
            throw new BadCredentialsException("Invalid username");
        }

        VerificationCode verificationCode = verificationCodeRepository.findByEmail(username);
        
        if(verificationCode==null || !verificationCode.getOtp().equals(otp)){
            throw new BadCredentialsException("Wrong OTP");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }

}
