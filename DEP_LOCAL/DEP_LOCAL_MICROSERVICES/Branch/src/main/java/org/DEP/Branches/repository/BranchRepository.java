package org.DEP.Branches.repository;

import org.DEP.Branches.entity.Branch;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BranchRepository extends CrudRepository<Branch, Long> {

    Optional<Branch> findByBranchName(String branchName);

    Optional<Branch> findByBranchStatus(Boolean status);
}
