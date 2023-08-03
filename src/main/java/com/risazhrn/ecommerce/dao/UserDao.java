package com.risazhrn.ecommerce.dao;

import com.risazhrn.ecommerce.dto.UserDto;
import com.risazhrn.ecommerce.entity.Users;
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
public class UserDao {
    private final NamedParameterJdbcTemplate jdbcTemplate;

    public void save(UserDto.Save inputData) {
        String query = """
                INSERT INTO public.users
                ("name", email, phone, address)
                VALUES(:name, :email, :phone, :address);
                """;

        MapSqlParameterSource map = new MapSqlParameterSource();

        map.addValue("name", inputData.getName());
        map.addValue("email", inputData.getEmail());
        map.addValue("phone", inputData.getPhone());
        map.addValue("address", inputData.getAddress());
        this.jdbcTemplate.update(query, map);
    }

    public List<Users> findAll() {
        String query = """
                SELECT id, "name", email, phone, address
                FROM public.users;
                """;

        return this.jdbcTemplate.query(query, new RowMapper<Users>() {
            @Override
            public Users mapRow(ResultSet rs, int rowNum) throws SQLException {
                Users users = new Users();
                users.setId(rs.getInt("id"));
                users.setName(rs.getString("name"));
                users.setEmail(rs.getString("email"));
                users.setPhone(rs.getString("phone"));
                users.setAddress(rs.getString("address"));
                return users;
            }
        });
    }

    public Optional<Users> findById(Integer id){
        String query = """
                SELECT id, "name", email, phone, address
                FROM public.users where id=:id;
                """;

        MapSqlParameterSource map = new MapSqlParameterSource();
        map.addValue("id", id);

        try {
            return this.jdbcTemplate.queryForObject(query, map, new RowMapper<Optional<Users>>() {
                @Override
                public Optional<Users> mapRow(ResultSet rs, int rowNum) throws SQLException {
                    Users user = new Users();
                    user.setId(rs.getInt("id"));
                    user.setName(rs.getString("name"));
                    user.setEmail(rs.getString("email"));
                    user.setPhone(rs.getString("phone"));
                    user.setAddress(rs.getString("address"));
                    return Optional.of(user);
                }
            });
        } catch (EmptyResultDataAccessException e) {
            return Optional.empty();
        }
    }

    public void delete(Integer id){
        String query = """
                DELETE FROM public.users
                WHERE id=:id
                """;

        MapSqlParameterSource map = new MapSqlParameterSource("id", id);
        this.jdbcTemplate.update(query, map);
    }

    public void update(UserDto.Update updateData, Integer id){
        String query = """
                UPDATE public.users
                SET "name"=:name, email=:email, phone=:phone, address=:address
                WHERE id=:id
                """;

        MapSqlParameterSource map = new MapSqlParameterSource();
        map.addValue("id", id);
        map.addValue("name", updateData.getName());
        map.addValue("email", updateData.getEmail());
        map.addValue("phone", updateData.getPhone());
        map.addValue("address", updateData.getAddress());
        this.jdbcTemplate.update(query, map);
    }
}
