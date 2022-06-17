package org.DEP.BranchAdmin.service;

import org.DEP.BranchAdmin.common.UserLogin;
import org.DEP.BranchAdmin.constants.Constants;
import org.DEP.BranchAdmin.entity.BranchAdmin;
import org.DEP.BranchAdmin.exceptions.BranchAdminAlreadyPresent;
import org.DEP.BranchAdmin.exceptions.BranchAdminsNotFoundException;
import org.DEP.BranchAdmin.exceptions.NoBranchAdminFoundException;
import org.DEP.BranchAdmin.model.BranchAdminResponse;
import org.DEP.BranchAdmin.model.BranchAdminStatus;
import org.DEP.BranchAdmin.repository.BranchAdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceImplementation implements ServiceInterface {
    @Autowired
    private BranchAdminRepository branchAdminRepository;

    @Autowired
    WebClient webClient;

    @Autowired
    private BranchAdminResponse branchAdminResponse;

    @Autowired
    private BranchAdminStatus branchAdminStatus;

    private Constants constants;

    //service method to get the all the branch admins and sends to UI
    @Override
    public ResponseEntity findAllBranchAdmins() {
        List<BranchAdmin> returnedBranchAdmins = null;
        try {
            returnedBranchAdmins = (List<BranchAdmin>) branchAdminRepository.findAll();
            if (returnedBranchAdmins.isEmpty()) throw new BranchAdminsNotFoundException("No Branch Admins Found");
            branchAdminResponse.setStatus(true);
            branchAdminResponse.setMessage(constants.branchAdminsFetchedSuccessful());
            branchAdminResponse.setData(returnedBranchAdmins);
            return new ResponseEntity(branchAdminResponse, HttpStatus.OK);
        } catch (BranchAdminsNotFoundException exception) {
            branchAdminResponse.setStatus(false);
            branchAdminResponse.setMessage(exception.getLocalizedMessage());
            branchAdminResponse.setData(returnedBranchAdmins);
            return new ResponseEntity(branchAdminResponse, HttpStatus.NOT_FOUND);
        }
    }

    //service method to save the branch admin information
    @Override
    public ResponseEntity saveBranchAdmin(BranchAdmin admin) {
        UserLogin login = new UserLogin();
        //BranchAdminStatus saveBranchAdmin = new BranchAdminStatus();
        try {
            Optional<BranchAdmin> branchAdmin = branchAdminRepository.findByEmail(admin.getEmail());
            if (branchAdmin.isPresent()) throw new BranchAdminAlreadyPresent("Branch admin already present");
            BranchAdmin savedAdmin = branchAdminRepository.save(admin);
            login.setEmailId(savedAdmin.getEmail());
            login.setUserType(savedAdmin.getUserType());
            login.setPassword(savedAdmin.getPassword());
            login.setLoginUserName(savedAdmin.getLoginUserName());
            UserLogin loginMono = createUserInLogin(login);
            if (loginMono == null) {
                branchAdminStatus.setStatus(false);
                branchAdminStatus.setMessage(constants.branchAdminNotSaved());
                return new ResponseEntity(branchAdminStatus, HttpStatus.NO_CONTENT);
            }
            branchAdminStatus.setStatus(true);
            branchAdminStatus.setMessage(constants.branchAdminSaved());
            return new ResponseEntity(branchAdminStatus, HttpStatus.OK);
        } catch (BranchAdminAlreadyPresent adminAlreadyPresent) {
            branchAdminStatus.setStatus(false);
            branchAdminStatus.setMessage(adminAlreadyPresent.getLocalizedMessage());
            return new ResponseEntity(branchAdminStatus, HttpStatus.NOT_ACCEPTABLE);
        }
    }

    //Method to update the branch admin
    @Override
    public ResponseEntity updateBranchAdmin(Long id, BranchAdmin admin) {
        try {
            BranchAdmin returnedBranchAdmin = branchAdminRepository.findByBranchId(id);
            if (returnedBranchAdmin == null || returnedBranchAdmin.getClientId() != admin.getClientId())
                throw new NoBranchAdminFoundException(constants.noBranchAdminFound());
            returnedBranchAdmin.setLoginUserName(admin.getLoginUserName());
            returnedBranchAdmin.setBranchName(admin.getBranchName());
            returnedBranchAdmin.setCountry(admin.getCountry());
            returnedBranchAdmin.setState(admin.getState());
            returnedBranchAdmin.setEmail(admin.getEmail());
            BranchAdmin savedReturnedAdmin = branchAdminRepository.save(returnedBranchAdmin);
            return new ResponseEntity(savedReturnedAdmin != null ? "Branch Admin Updated" : "Cannot update branch admin", HttpStatus.OK);
        } catch (NoBranchAdminFoundException e) {
            branchAdminStatus.setStatus(false);
            branchAdminStatus.setMessage(e.getLocalizedMessage());
            return new ResponseEntity(branchAdminStatus, HttpStatus.NOT_FOUND);
        }
    }

    //Method to delete the branch admin
    @Override
    public ResponseEntity deleteBranchAdmin(Long id) {
        try {
            BranchAdmin returnedBranchAdmin = branchAdminRepository.findByBranchId(id);
            if (returnedBranchAdmin == null) throw new NoBranchAdminFoundException(constants.noBranchAdminFound());
            branchAdminRepository.deleteById(id);
            branchAdminStatus.setMessage(constants.branchAdminDeleted());
            branchAdminStatus.setStatus(true);
            return new ResponseEntity(branchAdminStatus, HttpStatus.OK);
        } catch (NoBranchAdminFoundException exception) {
            branchAdminStatus.setMessage(constants.cannotDeleteBranchAdmin());
            branchAdminStatus.setStatus(false);
            return new ResponseEntity(branchAdminStatus, HttpStatus.NOT_FOUND);
        }
    }

    //Method to communicate the other microservice to update it's data
    public UserLogin createUserInLogin(UserLogin login) {
        return webClient.post().uri("/addUsers").body(Mono.just(login), UserLogin.class).retrieve().bodyToMono(UserLogin.class).block();
    }
}
