package com.abhishek.ecommerce_backend.service.impl;

import org.springframework.stereotype.Service;

import com.abhishek.ecommerce_backend.model.Product;
import com.abhishek.ecommerce_backend.model.User;
import com.abhishek.ecommerce_backend.model.WishList;
import com.abhishek.ecommerce_backend.repository.WishListRepository;
import com.abhishek.ecommerce_backend.service.WishListService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class WishListServiceImpl implements WishListService{

    private final WishListRepository wishListRepository;

    @Override
    public WishList craeteWishList(User user) {
        WishList wishList = new WishList();
        wishList.setUser(user);
        return wishListRepository.save(wishList);
    }

    @Override
    public WishList getWishListByUserId(User user) {
        WishList wishList = wishListRepository.findByUserId(user.getId());
        if (wishList == null) {
            wishList = craeteWishList(user);
        }
        return wishList;
    }

    @Override
    public WishList addProducToWishList(User user, Product product) {
        WishList wishList = getWishListByUserId(user);

        if (wishList.getProducts().contains(product)) {
            wishList.getProducts().remove(product);
        }
        else wishList.getProducts().add(product);

        return wishListRepository.save(wishList);
    }

}
