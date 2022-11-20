package com.example.User.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "carts")
public class Cart {
	@Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private int cartId;
	private String name;
	private String imageProduct;
	private float price;
	private int quantity;
	private int userId;
}
