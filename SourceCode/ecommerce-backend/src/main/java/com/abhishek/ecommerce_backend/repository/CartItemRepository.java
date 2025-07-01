package com.abhishek.ecommerce_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abhishek.ecommerce_backend.model.Cart;
import com.abhishek.ecommerce_backend.model.CartItem;
import com.abhishek.ecommerce_backend.model.Product;

public interface CartItemRepository extends JpaRepository<CartItem, Long>{

    CartItem findByCartAndProductAndSize(Cart cart, Product product, String size);
}
