package com.abhishek.ecommerce_backend.service;

import com.abhishek.ecommerce_backend.domain.USER_ROLE;
import com.abhishek.ecommerce_backend.request.LoginRequest;
import com.abhishek.ecommerce_backend.request.SignupRequest;
import com.abhishek.ecommerce_backend.response.AuthResponse;

public interface AuthService {

    void sentLoginOtp(String email, USER_ROLE role) throws Exception;
    String createUser(SignupRequest req) throws Exception;
    AuthResponse signin(LoginRequest req);
}
