package org.DEP.Branches.entity;

import javax.persistence.*;

@Entity
public class Branch {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long branchId;
    @Column
    private String branchName;
    @Column
    private Boolean branchStatus;

    public Branch(Long branchId, String branchName, Boolean branchStatus) {
        this.branchId = branchId;
        this.branchName = branchName;
        this.branchStatus = branchStatus;
    }

    public Branch() {
    }

    public Long getBranchId() {
        return branchId;
    }

    public void setBranchId(Long branchId) {
        this.branchId = branchId;
    }

    public String getBranchName() {
        return branchName;
    }

    public void setBranchName(String branchName) {
        this.branchName = branchName;
    }

    public Boolean getBranchStatus() {
        return branchStatus;
    }

    public void setBranchStatus(Boolean branchStatus) {
        this.branchStatus = branchStatus;
    }
}
