package org.DEP.BranchAdmin.repository;

import org.DEP.BranchAdmin.entity.BranchAdmin;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BranchAdminRepository extends CrudRepository<BranchAdmin, Long> {

    Optional<BranchAdmin> findByLoginUserName(String userName);
    Optional<BranchAdmin> findByEmail(String email);
    Optional<BranchAdmin> findByClientId(int clientId);
    BranchAdmin findByBranchId(Long branchId);

}
