package com.abhishek.ecommerce_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abhishek.ecommerce_backend.domain.AccountStatus;
import com.abhishek.ecommerce_backend.model.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long>{

    Seller findByEmail(String email);
    List<Seller> findByAccountStatus(AccountStatus status);
}
