package com.example.arshaa.model;

import com.google.inject.spi.PrivateElements;

public class UserModel {

	private int loginId;
	private String userType;
	private String loginUserName;
	private Boolean loginAcess;

	public void setLoginAcess(Boolean loginAcess) {
		this.loginAcess = loginAcess;
	}

	public Boolean getLoginAcess() {
		return loginAcess;
	}

	public String getLoginUserName() {
		return loginUserName;
	}

	public void setLoginUserName() {
		this.loginUserName = loginUserName;
	}

	public int getLoginId() {
		return loginId;
	}

	public void setLoginId(int loginId) {
		this.loginId = loginId;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

}
