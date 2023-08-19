package com.example.demo.service;

import com.example.demo.dao.UserRepo;
import com.example.demo.dto.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    public String createUser(UserEntity userEntity){
        userRepo.save(userEntity);
        return "User Created Successfully!";
    }

    public String checkAuth(String email, String phoneNumber){
        if(email.isEmpty() && phoneNumber.isEmpty()){
            return "Email or phoneNumber is Empty !";
        }else {
            List<UserEntity> list = userRepo.getUserByEmailAndphoneNumber(email, phoneNumber);
            if (list.size() == 0){
                return "User is Authorized !";
            }else {
                return "User is not Authorized to login!";
            }
        }
    }
}
