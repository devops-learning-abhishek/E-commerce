package com.abhishek.ecommerce_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abhishek.ecommerce_backend.model.WishList;

public interface WishListRepository extends JpaRepository<WishList, Long>{

    WishList findByUserId(Long userId);
}
