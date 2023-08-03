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
}
