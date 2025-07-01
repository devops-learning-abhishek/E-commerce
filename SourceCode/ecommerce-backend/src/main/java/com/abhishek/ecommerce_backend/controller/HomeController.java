package com.abhishek.ecommerce_backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abhishek.ecommerce_backend.response.ApiResponse;

@RestController
public class HomeController {
    
    @GetMapping
    public ApiResponse HomeControllerHandler(){
        ApiResponse apiResponse = new ApiResponse();
        apiResponse.setMessage("Welcome to new ecommerce project | ZyraCart");
        return apiResponse;
    }
}
