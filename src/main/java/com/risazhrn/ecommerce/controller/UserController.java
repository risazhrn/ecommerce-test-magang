package com.risazhrn.ecommerce.controller;

import com.risazhrn.ecommerce.dto.UserDto;
import com.risazhrn.ecommerce.entity.Users;
import com.risazhrn.ecommerce.service.UserService;
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
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService service;

    @PostMapping
    public ResponseEntity<Map<String, Object>> save(
            @RequestBody @Valid UserDto.Save data, BindingResult result
            ){
        Map<String, Object> output = new HashMap<>();
        if (result.hasErrors()) {
            Map<String, Object> errors = new HashMap<>();
            for (FieldError fieldError : result.getFieldErrors()) {
                errors.put(fieldError.getField(), fieldError.getDefaultMessage());
            }
            output.put("status", errors);
            return ResponseEntity.badRequest().body(output);
        }
        this.service.save(data);
        output.put("status", "Berhasil menambah user baru.");
        return ResponseEntity.ok(output);
    }

    @GetMapping
    public ResponseEntity<List<Users>> findAll(){
        List<Users> products = this.service.findAll();
        return ResponseEntity.ok(products);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Users> findById(
            @PathVariable(name = "id") Integer id
    ) {
        Users user = this.service.findById(id);
        return ResponseEntity.ok(user);
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
    public ResponseEntity<Map<String, Object>> update(
            @PathVariable(name = "id") Integer id,
            @RequestBody @Valid UserDto.Update data,
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
