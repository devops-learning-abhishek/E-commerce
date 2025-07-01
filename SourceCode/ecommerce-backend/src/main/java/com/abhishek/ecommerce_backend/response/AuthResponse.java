package com.abhishek.ecommerce_backend.response;

import com.abhishek.ecommerce_backend.domain.USER_ROLE;

import lombok.Data;

@Data
public class AuthResponse {

    private String jwt;
    private String message;
    private USER_ROLE role;
}
