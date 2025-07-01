package com.abhishek.ecommerce_backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abhishek.ecommerce_backend.exceptions.ProductException;
import com.abhishek.ecommerce_backend.model.Product;
import com.abhishek.ecommerce_backend.model.User;
import com.abhishek.ecommerce_backend.model.WishList;
import com.abhishek.ecommerce_backend.service.ProductService;
import com.abhishek.ecommerce_backend.service.UserService;
import com.abhishek.ecommerce_backend.service.WishListService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/wishlist")
public class WishListController {

    private final WishListService wishListService;
    private final ProductService productService;
    private final UserService userService;

    @GetMapping()
    public ResponseEntity<WishList> getWishListByUserId(@RequestHeader("Authorization")String jwt) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        WishList wishList = wishListService.getWishListByUserId(user);
        return ResponseEntity.ok(wishList);
    }

    @PostMapping("/add-product/{productId}")
    public ResponseEntity<WishList> addProductToWishList(@PathVariable Long productId, @RequestHeader("Authorization") String jwt) throws ProductException, Exception {
        Product product = productService.findProductById(productId);
        User user = userService.findUserByJwtToken(jwt);
        WishList updatedWishList = wishListService.addProducToWishList(user, product);
        return ResponseEntity.ok(updatedWishList);
    }
}
