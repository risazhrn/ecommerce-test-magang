package com.risazhrn.ecommerce.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Products {
    private Integer id;
    private String name;
    private Integer categoryId;
    private Integer stock;
    private String description;
    private Integer price;
    private String urlImage;
    private String categoryName;
}
