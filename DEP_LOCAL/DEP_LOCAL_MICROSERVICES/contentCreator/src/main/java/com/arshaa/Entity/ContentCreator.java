package com.arshaa.Entity;



import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="contentCreator")
public class ContentCreator {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column
	private int creatorId;
	
	@Column
	private String firstName;
	
	@Column
	private String lastName;
	
	@Column
	private String email;
	
	@Column
	private Long phoneNumber;
	
	@Column
	private String userName;
	
	@Column
	private String password;
	
	@Column
	private String address;
	
	@Column
	private String country;
	
	@Column
	@JsonFormat(pattern = "yyyy-mm-dd")
	private Date dateOfJoining;
	
	
	
	
	
	

	public int getCreatorId() {
		return creatorId;
	}

	public void setCreatorId(int creatorId) {
		this.creatorId = creatorId;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
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

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public Date getDateOfJoining() {
		return dateOfJoining;
	}
//	

	public void setDateOfJoining(Date dateOfJoining) {
		this.dateOfJoining = dateOfJoining;
	}

	

	public ContentCreator(int creatorId, String firstName, String lastName, String email, Long phoneNumber,
			String userName, String password, String address, String country, Date dateOfJoining
			) {
		super();
		this.creatorId = creatorId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.userName = userName;
		this.password = password;
		this.address = address;
		this.country = country;
		this.dateOfJoining = dateOfJoining;
		
	}

	public ContentCreator() {
		super();
	}
	
	
	
	
	
}
