package com.risazhrn.ecommerce.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

public class ProductDto {
    @Data
    public static class Save{
        @NotEmpty(message = "Nama tidak boleh kosong")
        @NotNull(message = "Nama tidak boleh null")
        private String name;

        @Min(0)
        @NotNull(message = "Kategori tidak boleh null")
        private Integer category_id;

        @Min(0)
        @NotNull(message = "Stok tidak boleh null")
        private Integer stock;

        @NotEmpty(message = "Deskripsi tidak boleh kosong")
        @NotNull(message = "Deskripsi tidak boleh null")
        private String description;

        @Min(0)
        @NotNull(message = "Harga tidak boleh null")
        private Integer price;

        @NotNull(message = "Image tidak boleh null")
        private String url_image;
    }

    @Data
    public static class Update{
        @NotEmpty(message = "Nama tidak boleh kosong")
        @NotNull(message = "Nama tidak boleh null")
        private String name;

        @Min(0)
        @NotNull(message = "Kategori tidak boleh null")
        private Integer category_id;

        @Min(0)
        @NotNull(message = "Stok tidak boleh null")
        private Integer stock;

        @NotEmpty(message = "Deskripsi tidak boleh kosong")
        @NotNull(message = "Deskripsi tidak boleh null")
        private String description;

        @Min(0)
        @NotNull(message = "Harga tidak boleh null")
        private Integer price;

        @NotNull(message = "Image tidak boleh null")
        private String url_image;
    }

}
