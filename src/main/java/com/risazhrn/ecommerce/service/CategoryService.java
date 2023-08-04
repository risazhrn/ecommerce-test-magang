package com.risazhrn.ecommerce.service;

import com.risazhrn.ecommerce.dao.CategoryDao;
import com.risazhrn.ecommerce.dao.ProductDao;
import com.risazhrn.ecommerce.dto.CategoryDto;
import com.risazhrn.ecommerce.entity.Category;
import com.risazhrn.ecommerce.exception.IdNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryDao dao;
    private final ProductDao productDao;

    public void save(CategoryDto.Save data){
        this.dao.save(data);
    }

    public List<Category> findAll(){
        return this.dao.findAll();
    }

    public Category findById(Integer id){
        return this.dao.findById(id).orElseThrow(() -> new IdNotFoundException("Category dengan id " + id + " tidak ditemukan."));
    }

    public void delete(Integer id){
        findById(id);
        this.productDao.removeCategory(id);
        this.dao.delete(id);
    }

    public void update(CategoryDto.Update data , Integer id){
        findById(id);
        this.dao.update(data, id);
    }
}
