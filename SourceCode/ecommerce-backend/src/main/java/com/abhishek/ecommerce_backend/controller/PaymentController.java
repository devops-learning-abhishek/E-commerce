package com.abhishek.ecommerce_backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.abhishek.ecommerce_backend.model.Order;
import com.abhishek.ecommerce_backend.model.PaymentOrder;
import com.abhishek.ecommerce_backend.model.Seller;
import com.abhishek.ecommerce_backend.model.SellerReport;
import com.abhishek.ecommerce_backend.model.User;
import com.abhishek.ecommerce_backend.response.ApiResponse;
import com.abhishek.ecommerce_backend.response.PaymentLinkResponse;
import com.abhishek.ecommerce_backend.service.PaymentService;
import com.abhishek.ecommerce_backend.service.SellerReportService;
import com.abhishek.ecommerce_backend.service.SellerService;
import com.abhishek.ecommerce_backend.service.TransactionService;
import com.abhishek.ecommerce_backend.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/payment")
public class PaymentController {

    private final PaymentService paymentService;
    private final UserService userService;
    private final SellerService sellerService;
    private final SellerReportService sellerReportService;
    private final TransactionService transactionService;

    @GetMapping("/{paymentId}")
    public ResponseEntity<ApiResponse> paymentSuccessHandler(
            @PathVariable String paymentId,
            @RequestParam String paymentLinkId,
            @RequestHeader("Authorization")String jwt) throws Exception{

        User user = userService.findUserByJwtToken(jwt);

        PaymentLinkResponse paymentLinkResponse;

        PaymentOrder paymentOrder = paymentService.getPaymentOrderByPaymentId(paymentLinkId);

        boolean paymentSuccess = paymentService.ProceedPaymentOrder(paymentOrder, paymentId, paymentLinkId);
        if (paymentSuccess) {
            for(Order order:paymentOrder.getOrders()){
                transactionService.createTransaction(order);
                Seller seller = sellerService.getSellerById(order.getSellerId());
                SellerReport report = sellerReportService.getSellerReport(seller);
                report.setTotalOrders(report.getTotalOrders()+1);
                report.setTotalEarnings(report.getTotalEarnings()+order.getTotalSellingPrice());
                report.setTotalSales(report.getTotalSales()+order.getOrderItems().size());
                sellerReportService.updateSellerReport(report);
            }
        }

        ApiResponse res = new ApiResponse();
        res.setMessage("Payment Successful");
        
        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }
}
