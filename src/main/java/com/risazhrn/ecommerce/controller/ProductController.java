package com.risazhrn.ecommerce.controller;

import com.risazhrn.ecommerce.dto.ProductDto;
import com.risazhrn.ecommerce.entity.Products;
import com.risazhrn.ecommerce.service.ProductService;
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
@RequestMapping("/api/product")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService service;

    @PostMapping
    public ResponseEntity<Map<String, Object>> save(
            @RequestBody @Valid ProductDto.Save data, BindingResult result
    ) {
        Map<String, Object> output = new HashMap<>();
        if (result.hasErrors()){
            Map<String, Object> errors = new HashMap<>();
            for (FieldError fieldError : result.getFieldErrors()) {
                errors.put(fieldError.getField(), fieldError.getDefaultMessage());
            }
            output.put("status", errors);
            return ResponseEntity.badRequest().body(output);
        }
        this.service.save(data);
        output.put("status", "Berhasil menambah product baru.");
        return ResponseEntity.ok(output);
    }

    @GetMapping
    public ResponseEntity<List<Products>> findAll(){
        List<Products> products = this.service.findAll();
        return ResponseEntity.ok(products);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Products> findById(
            @PathVariable(name = "id") Integer id
    ) {
        Products product = this.service.findById(id);
        return ResponseEntity.ok(product);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> delete(
            @PathVariable Integer id
    ) {
        this.service.delete(id);
        Map<String, Object> output = new HashMap<>();
        output.put("status", "Data berhasil dihapus.");
        return ResponseEntity.ok(output);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>>  update(
            @PathVariable(name = "id") Integer id,
            @RequestBody @Valid ProductDto.Update data,
            BindingResult result
    ) {
        Map<String, Object> output = new HashMap<>();
        if (result.hasErrors()){
            Map<String, Object> errors = new HashMap<>();
            for (FieldError fieldError : result.getFieldErrors()) {
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
