package com.ClientAdmin.Entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "client")
public class Client {
	@Id
	@Column
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int clientId;
	
	@Column
	private String firstName;
	@Column
	private String lastName;
	@Column
	private  long phoneNo;
	@Column
	private String country;
	@Column
	private String email;
	
	@Column
	private String clientIdProof;
	
	@Column
	private String userName;
	
	@Column
	private String password;

	@Column
	private String address;
	
	@Column 
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date subscriptionStartDate;
	
	@Column
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date subscriptionEndDate;
	@Column
	private String userType;
	// getters and setters
	
	
	public int getClientId() {
		return clientId;
	}

	public void setClientId(int clientId) {
		this.clientId = clientId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public long getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(long phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getClientIdProof() {
		return clientIdProof;
	}

	public void setClientIdProof(String clientIdProof) {
		this.clientIdProof = clientIdProof;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Date getSubscriptionStartDate() {
		return subscriptionStartDate;
	}

	public void setSubscriptionStartDate(Date subscriptionStartDate) {
		this.subscriptionStartDate = subscriptionStartDate;
	}


	public Date getSubscriptionEndDate() {
		return subscriptionEndDate;
	}


	public void setSubscriptionEndDate(Date subscriptionEndDate) {
		this.subscriptionEndDate = subscriptionEndDate;
	}



	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}
	// constructor

	

	public Client() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Client(int clientId, String firstName, String lastName, long phoneNo, String country, String email,
			String clientIdProof, String userName, String password, String address, Date subscriptionStartDate,
			Date subscriptionEndDate, String userType) {
		super();
		this.clientId = clientId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phoneNo = phoneNo;
		this.country = country;
		this.email = email;
		this.clientIdProof = clientIdProof;
		this.userName = userName;
		this.password = password;
		this.address = address;
		this.subscriptionStartDate = subscriptionStartDate;
		this.subscriptionEndDate = subscriptionEndDate;
		this.userType = userType;
	}

	
}  