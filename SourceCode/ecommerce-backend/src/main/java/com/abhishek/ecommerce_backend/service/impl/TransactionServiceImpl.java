package com.abhishek.ecommerce_backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.abhishek.ecommerce_backend.model.Order;
import com.abhishek.ecommerce_backend.model.Seller;
import com.abhishek.ecommerce_backend.model.Transaction;
import com.abhishek.ecommerce_backend.repository.SellerRepository;
import com.abhishek.ecommerce_backend.repository.TransactionRepository;
import com.abhishek.ecommerce_backend.service.TransactionService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TransactionServiceImpl implements TransactionService{

    private final TransactionRepository transactionRepository;
    private final SellerRepository sellerRepository;

    @Override
    public Transaction createTransaction(Order order) {
        Seller seller = sellerRepository.findById(order.getSellerId()).get();

        Transaction transaction = new Transaction();
        transaction.setSeller(seller);
        transaction.setCustomer(order.getUser());
        transaction.setOrder(order);

        return transactionRepository.save(transaction);
    }

    @Override
    public List<Transaction> getTransactionBySellerId(Seller seller) {
        return transactionRepository.findBySellerId(seller.getId());
    }

    @Override
    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

}
