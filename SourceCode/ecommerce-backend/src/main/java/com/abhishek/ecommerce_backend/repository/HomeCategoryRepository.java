package com.abhishek.ecommerce_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abhishek.ecommerce_backend.model.HomeCategory;

public interface HomeCategoryRepository extends JpaRepository<HomeCategory, Long>{

}
