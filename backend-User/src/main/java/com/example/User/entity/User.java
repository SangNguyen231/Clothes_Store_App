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
@Table(name = "Users")
public class User {
	@Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private int userId;
	private String phoneNumber;
    private String firstName;
    private String lastName;
    private String password;
    private String birthDay;
    private String Gender;
    
}
