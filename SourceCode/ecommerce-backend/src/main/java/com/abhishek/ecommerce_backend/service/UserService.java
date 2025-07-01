package com.abhishek.ecommerce_backend.service;

import com.abhishek.ecommerce_backend.model.User;

public interface UserService {

    User findUserByJwtToken(String jwt) throws Exception;
    User findUserByEmail(String email) throws Exception;
}
