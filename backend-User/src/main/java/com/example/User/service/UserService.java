package com.example.User.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.User.entity.User;
import com.example.User.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public User saveUser(User user) {
		return userRepository.save(user);
	}
	
	public List<User> findOneUser(String phoneNumber) {
		return userRepository.findOneUser(phoneNumber);
	}
	
	public List<User> login(String phoneNumber, String passWord){
		return userRepository.login(phoneNumber, passWord);
	}
	
	public User getUser(String phoneNumber) {
		return userRepository.getUser(phoneNumber);
	}
	
//	public User updateUser(String firstName,String lastName, String gender, String birthDay, int userId) {
//		return userRepository.updateUser(firstName, lastName, gender, birthDay, userId);
//	}
	
	public User findUserById(int userId) {
		return userRepository.findById(userId).get();
	}
	
	public User updateUser(User user, int userId) {
		User tempUser = userRepository.findById(userId).orElse(null);
		if(tempUser == null) {
			return null;
		}
		tempUser.setFirstName(user.getFirstName());
		tempUser.setLastName(user.getLastName());
		tempUser.setBirthDay(user.getBirthDay());
		tempUser.setGender(user.getGender());
		return userRepository.save(tempUser); 	
	}
	
}
