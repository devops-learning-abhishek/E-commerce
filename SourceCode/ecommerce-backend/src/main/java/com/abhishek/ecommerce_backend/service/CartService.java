package com.abhishek.ecommerce_backend.service;

import com.abhishek.ecommerce_backend.model.Cart;
import com.abhishek.ecommerce_backend.model.CartItem;
import com.abhishek.ecommerce_backend.model.Product;
import com.abhishek.ecommerce_backend.model.User;

public interface CartService {

    public CartItem addCartItem(
        User user,
        Product product,
        String size,
        int quantity
    );
    public Cart findUserCart(User user);
}
