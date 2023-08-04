package com.risazhrn.ecommerce.dao;

import com.risazhrn.ecommerce.dto.ProductDto;
import com.risazhrn.ecommerce.entity.Products;
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
public class ProductDao {
    private final NamedParameterJdbcTemplate jdbcTemplate;

    public void save(ProductDto.Save inputData) {
        String query = """
                INSERT INTO public.products
                ("name", category_id, stock, description, price, url_image)
                VALUES(:name, :category_id, :stock, :description, :price, :url_image);
                """;

        MapSqlParameterSource map = new MapSqlParameterSource();
        map.addValue("name", inputData.getName());
        map.addValue("category_id", inputData.getCategory_id());
        map.addValue("stock", inputData.getStock());
        map.addValue("description", inputData.getDescription());
        map.addValue("price", inputData.getPrice());
        map.addValue("url_image", inputData.getUrl_image());
        this.jdbcTemplate.update(query, map);
    }

    public List<Products> findAll() {
        String query = """
                SELECT p.id, p.name, p.category_id, p.stock, p.description, p.price, p.url_image, c.name as category_name
                FROM public.products p
                LEFT JOIN category c on c.id = p.category_id;
                """;
        return this.jdbcTemplate.query(query, new RowMapper<Products>() {
            @Override
            public Products mapRow(ResultSet rs, int rowNum) throws SQLException {
                Products product = new Products();
                product.setId(rs.getInt("id"));
                product.setName(rs.getString("name"));
                product.setCategoryId(rs.getInt("category_id"));
                product.setStock(rs.getInt("stock"));
                product.setDescription(rs.getString("description"));
                product.setPrice(rs.getInt("price"));
                product.setUrlImage(rs.getString("url_image"));
                product.setCategoryName(rs.getString("category_name"));
                return product;
            }
        });
    }

    public Optional<Products> findById(Integer id) {
        String query = """
                SELECT p.id, p.name, p.category_id, p.stock, p.description, p.price, p.url_image, c.name as category_name
                FROM public.products p
                LEFT JOIN category c on c.id = p.category_id
                where p.id=:id;
                """;
        MapSqlParameterSource map = new MapSqlParameterSource();
        map.addValue("id", id);
        try {
            return this.jdbcTemplate.queryForObject(query, map, new RowMapper<Optional<Products>>() {
                @Override
                public Optional<Products> mapRow(ResultSet rs, int rowNum) throws SQLException {
                    Products product = new Products();
                    product.setId(rs.getInt("id"));
                    product.setName(rs.getString("name"));
                    product.setCategoryId(rs.getInt("category_id"));
                    product.setStock(rs.getInt("stock"));
                    product.setDescription(rs.getString("description"));
                    product.setPrice(rs.getInt("price"));
                    product.setUrlImage(rs.getString("url_image"));
                    product.setCategoryName(rs.getString("category_name"));
                    return Optional.of(product);
                }
            });
        } catch (EmptyResultDataAccessException e) {
            return Optional.empty();
        }
    }

    public void delete(Integer id) {
        String query = """
                DELETE FROM public.products
                WHERE id=:id
                """;

        MapSqlParameterSource map = new MapSqlParameterSource();
        map.addValue("id", id);
        this.jdbcTemplate.update(query, map);
    }

    public void update(ProductDto.Update updateData, Integer id) {
        String query = """
                UPDATE public.products
                SET "name"=:name, category_id=:category_id, stock=:stock, description=:description, price=:price, url_image=:url_image
                WHERE id=:id;
                """;
        MapSqlParameterSource map = new MapSqlParameterSource();
        map.addValue("id", id);
        map.addValue("name", updateData.getName());
        map.addValue("category_id", updateData.getCategory_id());
        map.addValue("stock", updateData.getStock());
        map.addValue("description", updateData.getDescription());
        map.addValue("price", updateData.getPrice());
        map.addValue("url_image", updateData.getUrl_image());
        this.jdbcTemplate.update(query, map);
    }

    public void removeCategory(Integer id){
        String query = """
                UPDATE public.products
                SET category_id=null
                WHERE category_id=:id
                """;

        MapSqlParameterSource map = new MapSqlParameterSource();
        map.addValue("id", id);
        this.jdbcTemplate.update(query, map);
    }
}
