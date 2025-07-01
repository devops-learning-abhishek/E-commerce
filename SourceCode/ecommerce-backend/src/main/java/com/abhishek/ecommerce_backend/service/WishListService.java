package com.abhishek.ecommerce_backend.service;

import com.abhishek.ecommerce_backend.model.Product;
import com.abhishek.ecommerce_backend.model.User;
import com.abhishek.ecommerce_backend.model.WishList;

public interface WishListService {

    WishList craeteWishList(User user);
    WishList getWishListByUserId(User user);
    WishList addProducToWishList(User user, Product product);
}
