package com.risazhrn.ecommerce.exception;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ErrorDetails {
    private boolean status;
    private String message;
}
