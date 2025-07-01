package com.abhishek.ecommerce_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abhishek.ecommerce_backend.model.VerificationCode;

public interface VerificationCodeRepository extends JpaRepository<VerificationCode,Long>{

    VerificationCode findByEmail(String email);
    VerificationCode findByOtp(String otp);
}
