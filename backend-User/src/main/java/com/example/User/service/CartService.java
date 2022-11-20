package com.example.User.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.User.entity.Cart;
import com.example.User.repository.CartRepository;

@Service
public class CartService {

	@Autowired
	private CartRepository cartRepository;
	
	public Cart saveCart(Cart cart) {
		return cartRepository.save(cart);
	}
	
	public List<Cart> findCartByUserId(int userId){
		return cartRepository.findCartByUser(userId);
	}
	
	public String showTotal(int userId) {
		return cartRepository.showTotal(userId);
	}
	
	public void deleteCart(int cartId) {
		cartRepository.deleteById(cartId);
	}
	
}
