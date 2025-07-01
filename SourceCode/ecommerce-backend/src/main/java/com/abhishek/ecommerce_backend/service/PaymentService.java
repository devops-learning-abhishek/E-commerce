package com.abhishek.ecommerce_backend.service;

import java.util.Set;

import com.abhishek.ecommerce_backend.model.Order;
import com.abhishek.ecommerce_backend.model.PaymentOrder;
import com.abhishek.ecommerce_backend.model.User;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayException;
import com.stripe.exception.StripeException;

public interface PaymentService {

    PaymentOrder createOrder(User user, Set<Order> orders);
    PaymentOrder getPaymentOrderById(Long orderId) throws Exception;
    PaymentOrder getPaymentOrderByPaymentId(String orderId) throws Exception;
    Boolean ProceedPaymentOrder(PaymentOrder paymentOrder, String paymentId, String paymentLinkId) throws RazorpayException;
    PaymentLink createRazorpayPaymentLink(User user, Long amount, Long orderId) throws RazorpayException;
    String createStripePaymentLink(User user, Long amount, Long orderId) throws StripeException;
}
