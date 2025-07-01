package com.abhishek.ecommerce_backend.service;

import java.util.List;

import com.abhishek.ecommerce_backend.model.Cart;
import com.abhishek.ecommerce_backend.model.Coupon;
import com.abhishek.ecommerce_backend.model.User;

public interface CouponService {

    Cart applyCoupon(String code, double orderValue, User user) throws Exception;
    Cart removeCoupon(String code, User user) throws Exception;
    Coupon findCouponById(Long id) throws Exception;
    Coupon createCoupon(Coupon coupon);
    List<Coupon> findAllCoupons();
    void deleteCoupon(Long id) throws Exception;
}
