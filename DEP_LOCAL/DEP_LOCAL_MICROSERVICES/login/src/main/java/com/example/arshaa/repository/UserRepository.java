package com.example.arshaa.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.example.arshaa.entity.UserLogin;

@Repository
public interface UserRepository extends JpaRepository<UserLogin,String>
{
	Optional<UserLogin> getByLoginUserName(String loginUserName);
	UserLogin findByLoginUserName(String loginUserName);
	
	UserLogin findByPassword(String oldPassword);

	UserLogin findByLoginId(int id);

}
