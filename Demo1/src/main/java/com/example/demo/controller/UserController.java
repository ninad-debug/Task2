package com.example.demo.controller;

import com.example.demo.dto.UserEntity;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/create")
    String createUser(@RequestBody UserEntity userEntity){
        return userService.createUser(userEntity);
    }

    @GetMapping("/authorization/{email}/{phoneNumber}")
    String checkIfAuthorizedUser(@RequestParam String email,@RequestParam String phoneNumber){
        if(email == null || phoneNumber == null){
            return "Email & password is required";
        }
        return userService.checkAuth(email, phoneNumber);
    }

}
