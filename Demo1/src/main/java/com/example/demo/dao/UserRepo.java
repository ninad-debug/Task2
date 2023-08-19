package com.example.demo.dao;

import com.example.demo.dto.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepo extends JpaRepository<UserEntity,Integer> {
    @Query("select u from userEntity u where u.email=:email and u.phoneNumber=:phoneNumber")
    public List<UserEntity> getUserByEmailAndphoneNumber(String email, String phoneNumber);
}
