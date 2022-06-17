package org.DEP.BranchAdmin.model;

import org.DEP.BranchAdmin.entity.BranchAdmin;
import java.util.List;
public class BranchAdminResponse {

    private boolean status;
    private String message;
    private List<BranchAdmin> data;

    public BranchAdminResponse(boolean status, String message, List<BranchAdmin> data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

    public BranchAdminResponse() {
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public List<BranchAdmin> getData() {
        return data;
    }

    public void setData(List<BranchAdmin> data) {
        this.data = data;
    }
}
