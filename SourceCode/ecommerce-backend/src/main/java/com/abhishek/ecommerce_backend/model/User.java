package com.abhishek.ecommerce_backend.model;

import java.util.HashSet;
import java.util.Set;

import com.abhishek.ecommerce_backend.domain.USER_ROLE;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)     //tells springboot to generate values for id whenever new user is created
    private Long id;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)  //Password field is accepted when sending a request and hidden in API response  
    private String password;

    private String email;

    private String fullname;

    private String mobile;

    private USER_ROLE role = USER_ROLE.ROLE_CUSTOMER;

    @OneToMany
    private Set<Address> addresses = new HashSet<>();

    @ManyToMany
    @JsonIgnore    //Because we dont require coupon in frontend
    private Set<Coupon> usedCoupons = new HashSet<>();

}
