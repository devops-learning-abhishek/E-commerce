package com.abhishek.ecommerce_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abhishek.ecommerce_backend.model.Cart;

public interface CartRepository extends JpaRepository<Cart, Long>{

    Cart findByUserId(Long id);
}
