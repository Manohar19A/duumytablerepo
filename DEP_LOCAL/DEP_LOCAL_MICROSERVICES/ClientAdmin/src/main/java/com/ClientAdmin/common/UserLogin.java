package com.ClientAdmin.common;

public class UserLogin 
{
	private String loginUserName;
	private String userType;
	private String emailId;
	private String password;
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
	public UserLogin(String loginUserName, String userType, String emailId, String password) {
		super();
		this.loginUserName = loginUserName;
		this.userType = userType;
		this.emailId = emailId;
		this.password = password;
	}
	public UserLogin() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
