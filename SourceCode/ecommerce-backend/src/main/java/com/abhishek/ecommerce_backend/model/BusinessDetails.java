package com.abhishek.ecommerce_backend.model;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Embeddable
@Data
public class BusinessDetails {

    private String businnessName;
    private String businessEmail;
    private String businessMobile;
    private String businessAddress;
    private String logo;
    private String banner;
}
