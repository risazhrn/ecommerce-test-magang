package com.risazhrn.ecommerce.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;

public class UserProductDto {
    @Data
    public static class Save{
        @NotNull(message = "User Id tidak boleh null")
        private Integer user_id;

        @NotNull(message = "Product Id tidak boleh null")
        private Integer product_id;

        @Min(1)
        @NotNull(message = "Quantity tidak boleh null")
//        @NotEmpty(message = "Quantity tidak boleh kosong")
        private Integer quantity;
    }

    @Data
    public static class Update{
        @NotNull(message = "User Id tidak boleh null")
        private Integer user_id;

        @NotNull(message = "Product Id tidak boleh null")
        private Integer product_id;

        @Min(1)
        @NotNull(message = "Quantity tidak boleh null")
        @NotEmpty(message = "Quantity tidak boleh kosong")
        private Integer quantity;
    }
}
