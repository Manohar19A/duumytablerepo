package com.example.arshaa.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.arshaa.entity.UserLogin;
import com.example.arshaa.model.ResetPassword;
import com.example.arshaa.model.Response;
import com.example.arshaa.model.UserModel;
import com.example.arshaa.repository.UserRepository;

@Service
public class UserService {
    @Autowired(required = true)
    private UserRepository repository;

    public ResponseEntity updatePasswordByUsername(ResetPassword reset) {
        UserLogin returnedUser = repository.findByPassword(reset.getOldPassword());
        try {
            if (returnedUser != null) {
                if (returnedUser.getPassword().equals(reset.getOldPassword())) {
                    // Date cpDate = new Date(reset.getChangePasswordDate().getTime());
                    // returnedUser.setPassword(returnedUser.getPassword());
                    // reset.setChangePasswordDate(cpDate);
                    returnedUser.setPassword(reset.getConformNewPassword());
                    repository.save(returnedUser);
                    return new ResponseEntity(returnedUser, HttpStatus.OK);
                } else {
                    return new ResponseEntity("Enter valid UserName", HttpStatus.OK);
                }
            } else {
                return new ResponseEntity("Enter valid UserName", HttpStatus.OK);
            }
        } catch (Exception e) {
            return new ResponseEntity(returnedUser, HttpStatus.OK);
        }
    }

    public ResponseEntity<UserModel> getUsersByLoginUserName(String loginUserName, String password) {
        Response<UserModel> response = new Response<UserModel>();
        //List<User> dataUser=userRepo.findAll();
        UserModel um = new UserModel();
        try {
            Optional<UserLogin> user = repository.getByLoginUserName(loginUserName);

            if (user.isPresent()) {
                if (user.get().getPassword().equals(password)) {

                    response.setStatus(true);
                    response.setMessage("Login Success");
                    if (response.isStatus() == true) {
                        UserLogin user1 = repository.findByLoginUserName(loginUserName);
                        um.setLoginId(user1.getLoginId());
                        um.setUserType(user1.getUserType());
                        um.setLoginAcess(user1.getLoginAcess());
                    }
                    response.setData(um);
                    return new ResponseEntity(response, HttpStatus.OK);
                } else {
                    response.setStatus(false);
                    response.setMessage("Invalid Mail or Password");
                    return new ResponseEntity(response, HttpStatus.OK);
                }

            } else {
                response.setStatus(false);
                response.setMessage("Enter valid emailId");
                return new ResponseEntity(response, HttpStatus.OK);
            }
        } catch (Exception e) {
            response.setStatus(false);
            response.setMessage("Something went wrong please try again");
            return new ResponseEntity(response, HttpStatus.OK);
        }
    }


    public UserLogin saveUsers(UserLogin user) {
        try {
            user.setLoginAcess(true);
            return repository.save(user);
        } catch (Exception e) {
            new ResponseEntity(e.getMessage(), HttpStatus.OK);
        }
        return repository.save(user);
    }

    public ResponseEntity deactivateUser(Boolean status, UserLogin login) {
        Response response = new Response();
        try {
            UserLogin returnedUser = repository.findByLoginId(login.getLoginId());
            if (returnedUser != null && !returnedUser.getUserType().equalsIgnoreCase(login.getUserType())) {
                throw new RuntimeException("User Not Found");
            }
            returnedUser.setLoginAcess(status);
            UserLogin updatedUser = repository.save(returnedUser);
            if (updatedUser != null && !updatedUser.getLoginAcess()) {
                response.setStatus(true);
                response.setMessage(updatedUser.getUserType() + " deactivated successfully");
            }
            if (updatedUser != null && updatedUser.getLoginAcess()) {
                response.setStatus(true);
                response.setMessage(updatedUser.getUserType() + " activated successfully");
            }
            return new ResponseEntity(response, HttpStatus.OK);
        } catch (Exception e) {
            response.setStatus(false);
            response.setMessage(e.getLocalizedMessage());
            return new ResponseEntity(response, HttpStatus.NOT_FOUND);
        }
    }
}
