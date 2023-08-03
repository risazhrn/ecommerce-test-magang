package com.risazhrn.ecommerce.controller;

import com.risazhrn.ecommerce.dto.UserProductDto;
import com.risazhrn.ecommerce.entity.UserProduct;
import com.risazhrn.ecommerce.service.UserProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/user-product")
@RequiredArgsConstructor
public class UserProductController {
    private final UserProductService service;

    @GetMapping
    public ResponseEntity<List<UserProduct>> findAll() {
        List<UserProduct> userProducts = this.service.findAll();
        return ResponseEntity.ok(userProducts);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserProduct> findById(
            @PathVariable(name = "id") Integer id
    ) {
        UserProduct userProduct = this.service.findById(id);
        return ResponseEntity.ok(userProduct);
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> save(
            @RequestBody @Valid UserProductDto.Save data, BindingResult result
    ) {
        Map<String, Object> output = new HashMap<>();
        if (result.hasErrors()){
            Map<String, Object> errors = new HashMap<>();
            for (FieldError fieldError : result.getFieldErrors()){
                errors.put(fieldError.getField(), fieldError.getDefaultMessage());
            }
            output.put("status", errors);
            return ResponseEntity.badRequest().body(output);
        }
        this.service.save(data);
        output.put("status", "User telah berhasil menambahkan produk.");
        return ResponseEntity.ok(output);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(
            @PathVariable Integer id
    ) {
        this.service.delete(id);
        return ResponseEntity.ok("Data berhasil dihapus.");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> update(
            @PathVariable(name = "id") Integer id,
            @RequestBody UserProductDto.Update data,
            BindingResult result
    ) {
        Map<String, Object> output = new HashMap<>();
        if (result.hasErrors()){
            Map<String, Object> errors = new HashMap<>();
            for (FieldError fieldError : result.getFieldErrors()){
                errors.put(fieldError.getField(), fieldError.getDefaultMessage());
            }
            output.put("status", errors);
            return ResponseEntity.badRequest().body(output);
        }
        this.service.update(data, id);
        output.put("status", "Data berhasil diupdate.");
        return ResponseEntity.ok(output);
    }
}
