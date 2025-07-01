package com.abhishek.ecommerce_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abhishek.ecommerce_backend.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long>{

    List<Review> findByProductId(Long productId);
}
