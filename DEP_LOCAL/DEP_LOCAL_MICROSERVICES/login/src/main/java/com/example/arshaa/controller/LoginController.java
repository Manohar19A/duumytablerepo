package com.example.arshaa.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.arshaa.entity.UserLogin;
import com.example.arshaa.model.ResetPassword;
import com.example.arshaa.model.Response;
import com.example.arshaa.model.UserModel;
import com.example.arshaa.repository.UserRepository;
import com.example.arshaa.service.UserService;
@RestController
@CrossOrigin("*")
@RequestMapping("/login")
public class LoginController {
    @Autowired
    private UserService service;

    @Autowired
    UserRepository userRepo;

    //Api for test

    @GetMapping(path = "/test")
    public ResponseEntity<String> test() {
        return new ResponseEntity<>("hello", HttpStatus.OK);
    }

    @PostMapping("/addUsers")
    private UserLogin saveUsers(@RequestBody UserLogin user) {

        return service.saveUsers(user);
    }

    @GetMapping("/authenticateUser")
    public ResponseEntity<UserModel> getUsersByLoginUserName(@RequestParam String loginUserName, @RequestParam String password) {
        return service.getUsersByLoginUserName(loginUserName, password);
    }

    @PutMapping("/resetPassword")
    public ResponseEntity updatePasswordByUsername(ResetPassword reset) {
        return service.updatePasswordByUsername(reset);
    }

    @GetMapping("/getUsers")
    public List<UserLogin> getAllUsers() {
        return userRepo.findAll();
    }

    @PutMapping("/deactivateUser/{status}")
    public ResponseEntity deactivateUser(@PathVariable("status") Boolean status, @RequestBody UserLogin login) {
        return service.deactivateUser(status, login);
    }

}

