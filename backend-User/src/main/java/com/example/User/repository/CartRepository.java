package com.example.User.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.User.entity.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {
	
	@Query(value = "select * from carts where user_id = ?1", nativeQuery = true)
	List<Cart> findCartByUser(int userId);
	
	@Query(value = "select round(sum(price),2) as total from carts where user_id = ?1", nativeQuery = true)
	String showTotal(int userId);
}
