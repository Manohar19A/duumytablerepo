package org.DEP.BranchAdmin.common;

import java.util.Date;

public class UserLogin {

    private int loginId;
    private String loginUserName;
    private String userType;
    private String emailId;
    private String password;
    private Boolean updatedBy;
    private Boolean loginAcess;
    private String password1;
    private String password2;
    private String password3;
    private Date changePasswordDate;

    public UserLogin(int loginId, String loginUserName, String userType, String emailId, String password, Boolean updatedBy, Boolean loginAcess, String password1, String password2, String password3, Date changePasswordDate) {
        this.loginId = loginId;
        this.loginUserName = loginUserName;
        this.userType = userType;
        this.emailId = emailId;
        this.password = password;
        this.updatedBy = updatedBy;
        this.loginAcess = loginAcess;
        this.password1 = password1;
        this.password2 = password2;
        this.password3 = password3;
        this.changePasswordDate = changePasswordDate;
    }

    public UserLogin() {
    }

    public int getLoginId() {
        return loginId;
    }

    public void setLoginId(int loginId) {
        this.loginId = loginId;
    }

    public String getLoginUserName() {
        return loginUserName;
    }

    public void setLoginUserName(String loginUserName) {
        this.loginUserName = loginUserName;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(Boolean updatedBy) {
        this.updatedBy = updatedBy;
    }

    public Boolean getLoginAcess() {
        return loginAcess;
    }

    public void setLoginAcess(Boolean loginAcess) {
        this.loginAcess = loginAcess;
    }

    public String getPassword1() {
        return password1;
    }

    public void setPassword1(String password1) {
        this.password1 = password1;
    }

    public String getPassword2() {
        return password2;
    }

    public void setPassword2(String password2) {
        this.password2 = password2;
    }

    public String getPassword3() {
        return password3;
    }

    public void setPassword3(String password3) {
        this.password3 = password3;
    }

    public Date getChangePasswordDate() {
        return changePasswordDate;
    }

    public void setChangePasswordDate(Date changePasswordDate) {
        this.changePasswordDate = changePasswordDate;
    }
}
