package com.abhishek.ecommerce_backend.service;

import java.util.List;

import com.abhishek.ecommerce_backend.model.Product;
import com.abhishek.ecommerce_backend.model.Review;
import com.abhishek.ecommerce_backend.model.User;
import com.abhishek.ecommerce_backend.request.CreateReviewRequest;

public interface ReviewService {

    Review createReview(CreateReviewRequest req, User user, Product product);
    List<Review> getReviewByProductId(Long productId);
    Review updateReview(Long reviewId, String reviewText, double rating, Long userId) throws Exception;
    void deleteReview(Long reviewId, Long userId) throws Exception;
    Review getReviewById(Long reviewId) throws Exception;
}
