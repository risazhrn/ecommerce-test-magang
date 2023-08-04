package com.risazhrn.ecommerce.service;

import com.risazhrn.ecommerce.dao.ProductDao;
import com.risazhrn.ecommerce.dto.ProductDto;
import com.risazhrn.ecommerce.entity.Products;
import com.risazhrn.ecommerce.exception.IdNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductDao dao;
    private final CategoryService categoryService;

    public void save(ProductDto.Save data){
        categoryService.findById(data.getCategory_id());
        this.dao.save(data);
    }

    public List<Products> findAll(){
        return this.dao.findAll();
    }

    public Products findById(Integer id){
        return this.dao.findById(id).orElseThrow(()-> new IdNotFoundException("Product dengan id " + id + " tidak ditemukan."));
    }

    public void delete(Integer id){
        findById(id);
        this.dao.delete(id);
    }

    public void update(ProductDto.Update data, Integer id){
        findById(id);
        categoryService.findById(data.getCategory_id());
        this.dao.update(data, id);
    }
}
