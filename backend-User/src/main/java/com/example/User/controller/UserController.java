package com.example.User.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.User.entity.User;
import com.example.User.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostMapping("/")
    public User saveBook(@RequestBody User user) {
        return  userService.saveUser(user);
    }
	
	@GetMapping("/{id}")
    public User findBookById(@PathVariable("id") int userId) {
        return userService.findUserById(userId);
    }
	
	@GetMapping("/getOneUser/{phone}")
    public List<User> findOneUser(@PathVariable("phone") String phoneNumber) {
		return userService.findOneUser(phoneNumber);
    }
	
	@GetMapping("/getUser/{phone}")
    public User getUser(@PathVariable("phone") String phoneNumber) {
		return userService.getUser(phoneNumber);
    }
	
	@GetMapping("/login/{phone}/{password}")
    public List<User> login(@PathVariable("phone") String phoneNumber,@PathVariable("password") String passWord) {
		return userService.login(phoneNumber,passWord);
    }
	
	
	
	@PutMapping("/{id}")
	public User updateBook(@RequestBody User user, @PathVariable("id") int userId) {    
	    return userService.updateUser(user, userId);
	}
	
	
}
