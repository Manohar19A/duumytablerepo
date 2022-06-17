package org.DEP.BranchAdmin.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class BranchAdmin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long branchId;
    private int clientId;

    private String name;
    private String branchName;
    private String email;
    private String loginUserName;
    private String password;
    private String country;
    private String state;
    private String userType;

    public Long getBranchId() {
        return branchId;
    }

    public void setBranchId(Long branchId) {
        this.branchId = branchId;
    }

    public int getClientId() {
        return clientId;
    }

    public void setClientId(int clientId) {
        this.clientId = clientId;
    }

    public String getBranchName() {
        return branchName;
    }

    public void setBranchName(String branchName) {
        this.branchName = branchName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLoginUserName() {
        return loginUserName;
    }

    public void setLoginUserName(String loginUserName) {
        this.loginUserName = loginUserName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public BranchAdmin(Long branchId, int clientId, String branchName, String email, String loginUserName,
                       String password, String country, String state, String userType, String name) {
        super();
        this.branchId = branchId;
        this.clientId = clientId;
        this.branchName = branchName;
        this.email = email;
        this.loginUserName = loginUserName;
        this.password = password;
        this.country = country;
        this.state = state;
        this.userType = userType;
        this.name = name;
    }

    public BranchAdmin() {
        super();
        // TODO Auto-generated constructor stub
    }


}
