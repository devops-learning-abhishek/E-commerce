package com.abhishek.ecommerce_backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abhishek.ecommerce_backend.exceptions.ProductException;
import com.abhishek.ecommerce_backend.model.Cart;
import com.abhishek.ecommerce_backend.model.CartItem;
import com.abhishek.ecommerce_backend.model.Product;
import com.abhishek.ecommerce_backend.model.User;
import com.abhishek.ecommerce_backend.request.AddItemRequest;
import com.abhishek.ecommerce_backend.response.ApiResponse;
import com.abhishek.ecommerce_backend.service.CartItemService;
import com.abhishek.ecommerce_backend.service.CartService;
import com.abhishek.ecommerce_backend.service.ProductService;
import com.abhishek.ecommerce_backend.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/cart")
public class CartController {

    private final CartService cartService;
    private final CartItemService cartItemService;
    private final UserService userService;
    private final ProductService productService;

    @GetMapping
    public ResponseEntity<Cart> findUserCartHandler(@RequestHeader("Authorization") String jwt) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        Cart cart = cartService.findUserCart(user);
        return new ResponseEntity<Cart>(cart, HttpStatus.OK);
    }

    @PutMapping("/add")
    public ResponseEntity<CartItem> addItemToCart(@RequestBody AddItemRequest req, @RequestHeader("Authorization") String jwt) throws ProductException, Exception{
        User user = userService.findUserByJwtToken(jwt);
        Product product = productService.findProductById(req.getProductId());

        CartItem item = cartService.addCartItem(user, product, req.getSize(), req.getQuantity());

        ApiResponse res = new ApiResponse();
        res.setMessage("Item Added to Cart Successfully");

        return new ResponseEntity<>(item, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/item/{cartItemId}")
    public ResponseEntity<ApiResponse> deleteCartItemHandler(@PathVariable Long cartItemId, @RequestHeader("Authorization")String jwt) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        cartItemService.removeCartItem(user.getId(), cartItemId);

        ApiResponse res = new ApiResponse();
        res.setMessage("Item removed from Cart");

        return new ResponseEntity<>(res, HttpStatus.ACCEPTED);
    }   

    @PutMapping("/item/{cartItemId}")
    public ResponseEntity<CartItem> updateCartItemHandler(@PathVariable Long cartItemId, @RequestBody CartItem cartItem, @RequestHeader("Authorization")String jwt) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        CartItem updatedCartItem = null;
        if (cartItem.getQuantity()>0) {
            updatedCartItem = cartItemService.updateCartItem(user.getId(), cartItemId, cartItem);
        }

        return new ResponseEntity<>(updatedCartItem, HttpStatus.ACCEPTED);
    }
}
