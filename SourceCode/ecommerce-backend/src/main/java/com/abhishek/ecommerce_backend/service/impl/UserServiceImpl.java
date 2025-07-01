package com.abhishek.ecommerce_backend.service.impl;

import org.springframework.stereotype.Service;

import com.abhishek.ecommerce_backend.config.JwtProvider;
import com.abhishek.ecommerce_backend.model.User;
import com.abhishek.ecommerce_backend.repository.UserRepository;
import com.abhishek.ecommerce_backend.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final JwtProvider jwtProvider;

    @Override
    public User findUserByJwtToken(String jwt) throws Exception {
        String email = jwtProvider.getEmailFromJwtToken(jwt);

        User user = this.findUserByEmail(email);
        
        return user;
    }

    @Override
    public User findUserByEmail(String email) throws Exception {
        User user = userRepository.findByEmail(email);
        if (user==null) {
            throw new Exception("User not found with email : "+email);
        }
        return user;
    }

}
