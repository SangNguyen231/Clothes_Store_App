package com.example.User.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.User.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
	
	@Query(value = "select * from users where phone_number = ?1", nativeQuery = true)
	List<User> findOneUser(String phoneNumber);
	
	@Query(value = "select * from users where phone_number = ?1 and password = ?2", nativeQuery = true)
	List<User> login(String phoneNumber, String passWord);
	
	@Query(value = "select * from users where phone_number = ?1", nativeQuery = true)
	User getUser(String phoneNumber);
	
	@Query(value = "update users set first_name = ?1, last_name = ?2, gender = ?3, birth_day = ?4 where user_id = ?5", nativeQuery = true)
	User updateUser(String firstName,String lastName, String gender, String birthDay, int userId);
}
