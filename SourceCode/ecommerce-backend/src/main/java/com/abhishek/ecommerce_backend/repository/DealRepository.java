package com.abhishek.ecommerce_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abhishek.ecommerce_backend.model.Deal;

public interface DealRepository extends JpaRepository<Deal, Long>{

}
