package com.example.backend2.controller;

import com.example.backend2.model.User;
import com.example.backend2.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("http://localhost:3000")
@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;


    @PostMapping("/addUser")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    @GetMapping("/getUser")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

}
