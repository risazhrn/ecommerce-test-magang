package com.risazhrn.ecommerce.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserProduct {
    private Integer id;
    private Integer userId;
    private Integer productId;
    private Integer quantity;
    private Date createdAt;
    private Date updatedAt;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class UserListTransaction {
        private Integer id;
        private Integer userId;
        private Integer productId;
        private Integer quantity;
        private Integer price;
        private Date createdAt;
        private String userName;
        private String productName;
        private String urlImage;
        private String description;
        private String categoryName;
        private String address;
        private String phone;
    }

}
