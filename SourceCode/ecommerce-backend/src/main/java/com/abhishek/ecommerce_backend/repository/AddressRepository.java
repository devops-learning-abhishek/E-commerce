package com.abhishek.ecommerce_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abhishek.ecommerce_backend.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long>{

}
