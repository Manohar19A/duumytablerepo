package org.DEP.Branches.service;

import org.DEP.Branches.entity.Branch;
import org.DEP.Branches.model.SaveBranchStatus;
import org.DEP.Branches.repository.BranchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BranchesImplementation implements BranchInterface {

    @Autowired
    private BranchRepository branchRepository;

    @Override
    public ResponseEntity saveBranch(Branch branches) {
        SaveBranchStatus branchStatus = new SaveBranchStatus();
        try {
            Optional<Branch> optionalBranches = branchRepository.findByBranchName(branches.getBranchName());
            if (optionalBranches.isPresent())
                throw new Exception("Branch is already Created");
            branches.setBranchStatus(true);
            Branch branches1 = branchRepository.save(branches);
            if (branches1 == null) {
                branchStatus.setMessage("Cannot create branch");
                branchStatus.setStatus(false);
                return new ResponseEntity(branchStatus, HttpStatus.NOT_MODIFIED);
            }
            branchStatus.setStatus(true);
            branchStatus.setMessage("Branch Created Successful");
            branchStatus.setBranch(branches1);
            return new ResponseEntity(branchStatus, HttpStatus.CREATED);
        } catch (Exception e) {
            branchStatus.setStatus(false);
            branchStatus.setMessage(e.getLocalizedMessage());
            return new ResponseEntity<>(branchStatus, HttpStatus.NOT_ACCEPTABLE);
        }
    }

    @Override
    public List<Branch> getAllBranches() {
        return (List<Branch>) branchRepository.findAll();
    }

    @Override
    public ResponseEntity updateBranchData() {
        return null;
    }

    @Override
    public ResponseEntity deleteBranch() {
        return null;
    }
}
