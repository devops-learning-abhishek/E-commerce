package com.abhishek.ecommerce_backend.service;

import java.util.List;

import com.abhishek.ecommerce_backend.model.Home;
import com.abhishek.ecommerce_backend.model.HomeCategory;

public interface HomeService {

    public Home createHomePageData(List<HomeCategory> allCategories);
}
