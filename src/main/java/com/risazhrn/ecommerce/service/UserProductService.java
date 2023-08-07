package com.risazhrn.ecommerce.service;

import com.risazhrn.ecommerce.dao.ProductDao;
import com.risazhrn.ecommerce.dao.UserProductDao;
import com.risazhrn.ecommerce.dto.ProductDto;
import com.risazhrn.ecommerce.dto.UserProductDto;
import com.risazhrn.ecommerce.entity.Products;
import com.risazhrn.ecommerce.entity.UserProduct;
import com.risazhrn.ecommerce.exception.IdNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserProductService {
    private final UserProductDao dao;
    private final UserService userService;
    private final ProductService productService;

    public void save(UserProductDto.Save data) {
        userService.findById(data.getUser_id());
        Products product = productService.findById(data.getProduct_id());
        this.checkStock(product, data.getQuantity());
        this.dao.decreaseStock(product, data.getQuantity());
        this.dao.save(data);
    }

    public List<UserProduct> findAll(){
        return this.dao.findAll();
    }

    public UserProduct.UserListTransaction findById(Integer id){
        return this.dao.findById(id).orElseThrow(()-> new IdNotFoundException("Product dengan id " + id + " tidak ditemukan."));
    }

    public void delete(Integer id){
        findById(id);
        this.dao.delete(id);
    }

    public void update(UserProductDto.Update data, Integer id){
        userService.findById(data.getUser_id());
        productService.findById(data.getProduct_id());
        findById(id);
        this.dao.update(data, id);
    }

    public void checkStock(Products product, Integer quantity){
        if (product.getStock() == 0){
            throw new IdNotFoundException("Stock habis");
        } else if (product.getStock() < quantity) {
            throw new IdNotFoundException("Stock tidak memenuhi");
        }
    }

    public List<UserProduct.UserListTransaction> findUserTransaction(Integer id){
        return this.dao.findUserTransaction(id);
    }

}
