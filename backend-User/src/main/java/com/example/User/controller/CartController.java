package com.example.User.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.User.entity.Cart;
import com.example.User.service.CartService;

@RestController
@RequestMapping("/cart")
public class CartController {

	@Autowired
	private CartService cartService;
	
	@PostMapping("/")
	public Cart saveCart(@RequestBody Cart cart) {
		return cartService.saveCart(cart);
	}
	
	@GetMapping("/{id}")
	public List<Cart> findCartByUserId(@PathVariable("id") int userId){
		return cartService.findCartByUserId(userId);
	}
	
	@GetMapping("/getTotal/{id}")
	public String showTotal(@PathVariable("id") int userId){
		return cartService.showTotal(userId);
	}
	
	@DeleteMapping("/{id}")
	public void deleteCart(@PathVariable("id") int cartId) {
		cartService.deleteCart(cartId);
	}
	
}
