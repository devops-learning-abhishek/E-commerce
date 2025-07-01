package com.abhishek.ecommerce_backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.abhishek.ecommerce_backend.model.HomeCategory;
import com.abhishek.ecommerce_backend.repository.HomeCategoryRepository;
import com.abhishek.ecommerce_backend.service.HomeCategoryService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class HomeCategoryServiceImpl implements HomeCategoryService{
    
    private final HomeCategoryRepository homeCategoryRepository;

    @Override
    public HomeCategory createHomeCategory(HomeCategory homeCategory) {
        return homeCategoryRepository.save(homeCategory);
    }

    @Override
    public List<HomeCategory> createCategories(List<HomeCategory> homeCategories) {
        if (homeCategoryRepository.findAll().isEmpty()) {
            return homeCategoryRepository.saveAll(homeCategories);
        }
        return homeCategoryRepository.findAll();
    }

    @Override
    public HomeCategory updateHomeCategory(HomeCategory homeCategory, Long id) throws Exception {
        HomeCategory existingCategory = homeCategoryRepository.findById(id)
                .orElseThrow(() -> new Exception("Category not found"));
        if (homeCategory.getImage() != null) {
            existingCategory.setImage(homeCategory.getImage());
        }
        if (homeCategory.getCategoryId() != null) {
            existingCategory.setCategoryId(homeCategory.getCategoryId());
        }
        return homeCategoryRepository.save(existingCategory);
    }

    @Override
    public List<HomeCategory> getAllHomeCategories() {
        return homeCategoryRepository.findAll();
    }

}
