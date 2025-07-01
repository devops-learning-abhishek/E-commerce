package com.abhishek.ecommerce_backend.request;

import lombok.Data;

@Data
public class SignupRequest {

    private String email;
    private String fullName;
    private String otp;
}
