package com.abhishek.ecommerce_backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abhishek.ecommerce_backend.domain.USER_ROLE;
import com.abhishek.ecommerce_backend.request.LoginOtpRequest;
import com.abhishek.ecommerce_backend.request.LoginRequest;
import com.abhishek.ecommerce_backend.request.SignupRequest;
import com.abhishek.ecommerce_backend.response.ApiResponse;
import com.abhishek.ecommerce_backend.response.AuthResponse;
import com.abhishek.ecommerce_backend.service.AuthService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/sent/login-signup-otp")
    public ResponseEntity<ApiResponse> sentOtpHandler(@RequestBody LoginOtpRequest req) throws Exception{
        
        authService.sentLoginOtp(req.getEmail(), req.getRole());

        ApiResponse res = new ApiResponse();
        res.setMessage("OTP sent successfully");
        
        return ResponseEntity.ok(res);
    }

    @PostMapping("/signup")      //customer signup
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody SignupRequest req) throws Exception{
        
        String jwt = authService.createUser(req);

        AuthResponse res = new AuthResponse();
        res.setJwt(jwt);
        res.setMessage("register success");
        res.setRole(USER_ROLE.ROLE_CUSTOMER);

        return ResponseEntity.ok(res);
    }

    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> loginHandler(@RequestBody LoginRequest req) throws Exception{
        
        AuthResponse authResponse = authService.signin(req);
        
        return ResponseEntity.ok(authResponse);
    }
}
