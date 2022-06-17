package org.DEP.BranchAdmin.service;

import org.DEP.BranchAdmin.entity.BranchAdmin;
import org.DEP.BranchAdmin.exceptions.BranchAdminAlreadyPresent;
import org.DEP.BranchAdmin.exceptions.BranchAdminsNotFoundException;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ServiceInterface {

    public ResponseEntity findAllBranchAdmins();

    public ResponseEntity saveBranchAdmin(BranchAdmin admin);

    public ResponseEntity updateBranchAdmin(Long id, BranchAdmin admin);

    public ResponseEntity deleteBranchAdmin(Long id);
}
