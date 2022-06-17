package org.DEP.Branches.controller;

import org.DEP.Branches.entity.Branch;
import org.DEP.Branches.service.BranchInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/branch")
public class BranchController {

    @Autowired
    private BranchInterface branchInterface;

    @PostMapping("/saveBranch")
    public ResponseEntity saveBranch(@RequestBody Branch branch){
        return branchInterface.saveBranch(branch);
    }

    @GetMapping("/getAllBranches")
    public List<Branch> getAllBranches(){
        return branchInterface.getAllBranches();
    }
}
