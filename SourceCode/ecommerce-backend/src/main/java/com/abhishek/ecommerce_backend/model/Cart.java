package com.abhishek.ecommerce_backend.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    private User user;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true)       // cascade type all is used because if any changes or updates made in cartItems it will also reflect in this Set    // orphanRemoval is used because whenever if remove a cartItem it will remove from this Set also 
    private Set<CartItem> cartItems = new HashSet<>();

    private double totalSellingPrice;

    private double totalItem;

    private int totalMrpPrice;

    private int discount;

    private String couponCode;
}
