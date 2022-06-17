package org.DEP.BranchAdmin.controller;

import org.DEP.BranchAdmin.entity.BranchAdmin;
import org.DEP.BranchAdmin.exceptions.BranchAdminAlreadyPresent;
import org.DEP.BranchAdmin.exceptions.BranchAdminsNotFoundException;
import org.DEP.BranchAdmin.service.ServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/branchAdmin")
public class BranchAdminController {
    @Autowired
    private ServiceInterface serviceInterface;

    //Get API to get all branch admins data
    @GetMapping("/getAllBranchAdmins")
    public ResponseEntity getAllBranchAdmins() throws Exception {
        return serviceInterface.findAllBranchAdmins();
    }

    //Post API to save branch admin's data
    @PostMapping("/saveBranchAdmin")
    public ResponseEntity saveBranchAdmin(@RequestBody BranchAdmin admin) {
        return serviceInterface.saveBranchAdmin(admin);
    }

    //Update call to update the branch admin's data
    @PutMapping("/updateBranchAdminWithId/{id}")
    public ResponseEntity updateBranchAdmin(@PathVariable("id") Long id, @RequestBody BranchAdmin admin) {
        return serviceInterface.updateBranchAdmin(id, admin);
    }

    //Delete API to delete the branch admins
    @DeleteMapping("/deleteBranchAdminById/{id}")
    public ResponseEntity deleteBranchAdmin(@PathVariable("id") Long id) {
        return serviceInterface.deleteBranchAdmin(id);
    }
}
