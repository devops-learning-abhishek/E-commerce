package com.abhishek.ecommerce_backend.service;

import java.util.List;

import com.abhishek.ecommerce_backend.model.Order;
import com.abhishek.ecommerce_backend.model.Seller;
import com.abhishek.ecommerce_backend.model.Transaction;

public interface TransactionService {

    Transaction createTransaction(Order order);
    List<Transaction> getTransactionBySellerId(Seller seller);
    List<Transaction> getAllTransactions();
}
