package org.DEP.Branches.model;

import org.DEP.Branches.entity.Branch;

public class SaveBranchStatus {

    private Boolean status;
    private String message;
    private Branch branch;

    public SaveBranchStatus(Boolean status, String message, Branch branch) {
        this.status = status;
        this.message = message;
        this.branch = branch;
    }

    public SaveBranchStatus() {
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Branch getBranch() {
        return branch;
    }

    public void setBranch(Branch branch) {
        this.branch = branch;
    }
}
