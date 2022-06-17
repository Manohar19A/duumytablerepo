package org.DEP.BranchAdmin.model;

public class BranchAdminStatus {

    private Boolean status;
    private String message;

    public BranchAdminStatus(Boolean status, String message) {
        this.status = status;
        this.message = message;
    }

    public BranchAdminStatus() {
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
}
