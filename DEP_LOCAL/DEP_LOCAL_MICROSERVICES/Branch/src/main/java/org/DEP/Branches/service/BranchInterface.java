package org.DEP.Branches.service;

import org.DEP.Branches.entity.Branch;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface BranchInterface {

    public ResponseEntity saveBranch(Branch branches);

    public List<Branch> getAllBranches();

    public ResponseEntity updateBranchData();

    public ResponseEntity deleteBranch();
}
