package com.risazhrn.ecommerce.dao;

import com.risazhrn.ecommerce.dto.CategoryDto;
import com.risazhrn.ecommerce.entity.Category;
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
public class CategoryDao {
    private final NamedParameterJdbcTemplate jdbcTemplate;

    public void save(CategoryDto.Save inputData){
        String query = """
                INSERT INTO public.category
                ("name")
                VALUES(:name);
                """;

        MapSqlParameterSource map = new MapSqlParameterSource();
        map.addValue("name", inputData.getName());
        this.jdbcTemplate.update(query, map);
    }

    public List<Category> findAll(){
        String query = """
                SELECT id, name FROM public.category
                """;

        return this.jdbcTemplate.query(query, new RowMapper<Category>() {
            @Override
            public Category mapRow(ResultSet rs, int rowNum) throws SQLException {
                Category category = new Category();
                category.setId(rs.getInt("id"));
                category.setName(rs.getString("name"));
                return category;
            }
        });
    }

    public Optional<Category> findById(Integer id){
        String query = """
                SELECT id, name FROM public.category
                where id=:id
                """;
        MapSqlParameterSource map = new MapSqlParameterSource();
        map.addValue("id", id);
        try {
            return this.jdbcTemplate.queryForObject(query, map, new RowMapper<Optional<Category>>() {
                @Override
                public Optional<Category> mapRow(ResultSet rs, int rowNum) throws SQLException {
                    Category category = new Category();
                    category.setId(rs.getInt("id"));
                    category.setName(rs.getString("name"));
                    return Optional.of(category);
                }
            });
        }catch (EmptyResultDataAccessException e){
            return Optional.empty();
        }
    }

    public void delete(Integer id){
        String query = """
                DELETE FROM public.category
                WHERE id=:id
                """;

        MapSqlParameterSource map = new MapSqlParameterSource("id", id);
        this.jdbcTemplate.update(query, map);
    }

    public void update(CategoryDto.Update updateData, Integer id){
        String query = """
                UPDATE public.category
                SET "name"=:name
                WHERE id=:id
                """;

        MapSqlParameterSource map = new MapSqlParameterSource();
        map.addValue("id", id);
        map.addValue("name", updateData.getName());
        this.jdbcTemplate.update(query, map);
    }
}
