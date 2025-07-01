package com.abhishek.ecommerce_backend.service;

import com.abhishek.ecommerce_backend.model.Seller;
import com.abhishek.ecommerce_backend.model.SellerReport;

public interface SellerReportService {

    SellerReport getSellerReport(Seller seller);
    SellerReport updateSellerReport(SellerReport sellerReport);
}
