package com.abhishek.ecommerce_backend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abhishek.ecommerce_backend.exceptions.ProductException;
import com.abhishek.ecommerce_backend.model.Product;
import com.abhishek.ecommerce_backend.model.Review;
import com.abhishek.ecommerce_backend.model.User;
import com.abhishek.ecommerce_backend.request.CreateReviewRequest;
import com.abhishek.ecommerce_backend.response.ApiResponse;
import com.abhishek.ecommerce_backend.service.ProductService;
import com.abhishek.ecommerce_backend.service.ReviewService;
import com.abhishek.ecommerce_backend.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class ReviewController {

    private final ReviewService reviewService;
    private final UserService userService;
    private final ProductService productService;

    @GetMapping("/products/{productId}/reviews")
    public ResponseEntity<List<Review>> getReviewsByProductId(@PathVariable Long productId){
        List<Review> reviews = reviewService.getReviewByProductId(productId);
        return ResponseEntity.ok(reviews);
    }

    @PostMapping("/products/{productId}/reviews")
    public ResponseEntity<Review> writeReview(@RequestBody CreateReviewRequest req, @PathVariable Long productId, @RequestHeader("Authorization")String jwt) throws ProductException, Exception{
        User user = userService.findUserByJwtToken(jwt);
        Product product = productService.findProductById(productId);
        Review review = reviewService.createReview(req, user, product);
        return ResponseEntity.ok(review);
    }

    @PatchMapping("/reviews/{reviewId}")
    public ResponseEntity<Review> updateReview(@RequestBody CreateReviewRequest req, @PathVariable Long reviewId, @RequestHeader("Authorization")String jwt) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        Review review = reviewService.updateReview(reviewId, req.getReviewText(), req.getReviewRating(), user.getId());
        return ResponseEntity.ok(review);
    }

    @DeleteMapping("/reviews/{reviewId}")
    public ResponseEntity<ApiResponse> deleteReview(@PathVariable Long reviewId, @RequestHeader("Authorization")String jwt) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        reviewService.deleteReview(reviewId, user.getId());
        
        ApiResponse res = new ApiResponse();
        res.setMessage("Review deleted successfully..");
        
        return ResponseEntity.ok(res);
    }
}
