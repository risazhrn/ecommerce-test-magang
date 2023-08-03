package com.risazhrn.ecommerce.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

public class UserDto {

    @Data
    public static class Save{
        @NotNull(message = "Nama tidak boleh null")
        @NotEmpty(message = "Nama tidak boleh kosong")
        private String name;

        @Email
        @NotNull(message = "Email tidak boleh null")
        @NotEmpty(message = "Email tidak boleh kosong")
        private String email;

        @NotNull(message = "Phone tidak boleh null")
        @NotEmpty(message = "Phone tidak boleh kosong")
        private String phone;

        @NotNull(message = "Alamat tidak boleh null")
        @NotEmpty(message = "Alamat tidak boleh kosong")
        private String address;
    }

    @Data
    public static class Update{
        @NotNull(message = "Nama tidak boleh null")
        @NotEmpty(message = "Nama tidak boleh kosong")
        private String name;

        @Email
        @NotNull(message = "Email tidak boleh null")
        @NotEmpty(message = "Email tidak boleh kosong")
        private String email;

        @Size(min = 11, max = 13)
        @NotNull(message = "Phone tidak boleh null")
        @NotEmpty(message = "Phone tidak boleh kosong")
        private String phone;

        @NotNull(message = "Alamat tidak boleh null")
        @NotEmpty(message = "Alamat tidak boleh kosong")
        private String address;
    }
}
