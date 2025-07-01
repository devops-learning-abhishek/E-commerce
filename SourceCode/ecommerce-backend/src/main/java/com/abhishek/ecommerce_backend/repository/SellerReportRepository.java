package com.abhishek.ecommerce_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abhishek.ecommerce_backend.model.SellerReport;

public interface SellerReportRepository extends JpaRepository<SellerReport, Long>{

    SellerReport findBySellerId(Long sellerId);
}
