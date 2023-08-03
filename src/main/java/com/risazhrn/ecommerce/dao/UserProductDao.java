package com.risazhrn.ecommerce.dao;

import com.risazhrn.ecommerce.dto.UserProductDto;
import com.risazhrn.ecommerce.entity.Products;
import com.risazhrn.ecommerce.entity.UserProduct;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class UserProductDao {
    private final NamedParameterJdbcTemplate jdbcTemplate;

    public void save(UserProductDto.Save inputData) {
        String query = """
                INSERT INTO public.user_product
                (user_id, product_id, quantity, created_at, updated_at)
                VALUES(:user_id, :product_id, :quantity, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
                """;

        MapSqlParameterSource map = new MapSqlParameterSource();
        map.addValue("user_id", inputData.getUser_id());
        map.addValue("product_id", inputData.getProduct_id());
        map.addValue("quantity", inputData.getQuantity());
        this.jdbcTemplate.update(query, map);
    }

    public List<UserProduct> findAll() {
        String query = """
                SELECT id, user_id, product_id, quantity, created_at, updated_at
                FROM public.user_product;
                """;

        return this.jdbcTemplate.query(query, new RowMapper<UserProduct>() {

            @Override
            public UserProduct mapRow(ResultSet rs, int rowNum) throws SQLException {
                UserProduct userProduct = new UserProduct();
                userProduct.setId(rs.getInt("id"));
                userProduct.setUserId(rs.getInt("user_id"));
                userProduct.setProductId(rs.getInt("product_id"));
                userProduct.setQuantity(rs.getInt("quantity"));
                userProduct.setCreatedAt(rs.getTimestamp("created_at"));
                userProduct.setUpdatedAt(rs.getTimestamp("updated_at"));
                return userProduct;
            }
        });
    }

    public Optional<UserProduct> findById(Integer id) {
        String query = """
                SELECT id, user_id, product_id, quantity, created_at, updated_at
                FROM public.user_product where id=:id
                """;

        MapSqlParameterSource map = new MapSqlParameterSource();
        map.addValue("id", id);

        try {
            return this.jdbcTemplate.queryForObject(query, map, new RowMapper<Optional<UserProduct>>() {
                @Override
                public Optional<UserProduct> mapRow(ResultSet rs, int rowNum) throws SQLException {
                    UserProduct userProduct = new UserProduct();
                    userProduct.setId(rs.getInt("id"));
                    userProduct.setUserId(rs.getInt("user_id"));
                    userProduct.setProductId(rs.getInt("product_id"));
                    userProduct.setQuantity(rs.getInt("quantity"));
                    userProduct.setCreatedAt(rs.getTimestamp("created_at"));
                    userProduct.setUpdatedAt(rs.getTimestamp("updated_at"));
                    return Optional.of(userProduct);
                }
            });
        } catch (EmptyResultDataAccessException e) {
            return Optional.empty();
        }
    }

    public void delete(Integer id) {
        String query = """
                DELETE FROM public.user_product
                WHERE id=:id
                """;

        MapSqlParameterSource map = new MapSqlParameterSource();
        map.addValue("id", id);
        this.jdbcTemplate.update(query, map);
    }

    public void update(UserProductDto.Update updateData, Integer id){
        String query = """
                UPDATE public.user_product 
                SET user_id=:user_id, product_id=:product_id, quantity=:quantity, updated_at=CURRENT_TIMESTAMP
                WHERE id=:id
                """;

        MapSqlParameterSource map = new MapSqlParameterSource();
        map.addValue("id", id);
        map.addValue("user_id", updateData.getUser_id());
        map.addValue("product_id", updateData.getProduct_id());
        map.addValue("quantity", updateData.getQuantity());
        this.jdbcTemplate.update(query, map);
    }

    public void decreaseStock(Products product, Integer quantity){
        String query = """
                UPDATE public.products SET stock=:stock where id=:id
                """;

        MapSqlParameterSource map = new MapSqlParameterSource();
        map.addValue("id", product.getId());
        map.addValue("stock", product.getStock() - quantity);
        this.jdbcTemplate.update(query, map);
    }

}
