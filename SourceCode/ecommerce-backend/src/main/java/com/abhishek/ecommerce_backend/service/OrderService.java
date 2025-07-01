package com.abhishek.ecommerce_backend.service;

import java.util.List;
import java.util.Set;

import com.abhishek.ecommerce_backend.domain.OrderStatus;
import com.abhishek.ecommerce_backend.model.Address;
import com.abhishek.ecommerce_backend.model.Cart;
import com.abhishek.ecommerce_backend.model.Order;
import com.abhishek.ecommerce_backend.model.OrderItem;
import com.abhishek.ecommerce_backend.model.User;

public interface OrderService {

    Set<Order> createOrder(User user, Address shippingAddress, Cart cart);
    Order findOrderById(Long id) throws Exception;
    List<Order> userOrderHistory(Long userId);
    List<Order> sellerOrder(Long sellerId);
    Order updateOrderStatus(Long orderId, OrderStatus orderStatus) throws Exception;
    Order cancelOrder(Long orderId, User user) throws Exception;
    OrderItem getOrderItemById(Long id) throws Exception;
}
