package com.risazhrn.ecommerce.service;

import com.risazhrn.ecommerce.dao.UserDao;
import com.risazhrn.ecommerce.dao.UserProductDao;
import com.risazhrn.ecommerce.dto.UserDto;
import com.risazhrn.ecommerce.entity.Users;
import com.risazhrn.ecommerce.exception.IdNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserDao dao;
    private final UserProductDao userProductDao;

    public void save(UserDto.Save data){
        this.dao.save(data);
    }

    public List<Users> findAll(){
        return this.dao.findAll();
    }

    public Users findById(Integer id){
        return this.dao.findById(id).orElseThrow(() -> new IdNotFoundException("User dengan id " + id + " tidak ditemukan."));
    }

    public  void delete(Integer id){
        findById(id);
        this.userProductDao.deleteByUser(id);
        this.dao.delete(id);
    }

    public void update(UserDto.Update data, Integer id){
        findById(id);
        this.dao.update(data, id);
    }
}
