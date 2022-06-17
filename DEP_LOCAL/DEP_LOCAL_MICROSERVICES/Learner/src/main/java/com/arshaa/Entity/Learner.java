package com.arshaa.Entity;


import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="learner_table")
public class Learner {


	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column
	private int learnerId;
	
	@Column
	private String firstName;
	
	@Column
	private String lastName;
	
	@Column
	private String emailId;
	
	@Column
	private Long phoneNumber;
	
	@Column
	private String branchName;
	
	@Column
	private String assignedCourses;
	
	@Column
	private String address;
	
	@Column
	@JsonFormat(pattern = "yyyy-mm-dd")
	private Date startDate;
	
	@Column
	@JsonFormat(pattern = "yyyy-mm-dd")
	private Date endDate;
	
	@Column
	private String userName;
	
	@Column
	private String password;

	public int getLearnerId() {
		return learnerId;
	}

	public void setLearnerId(int learnerId) {
		this.learnerId = learnerId;
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

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public Long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getBranchName() {
		return branchName;
	}

	public void setBranchName(String branchName) {
		this.branchName = branchName;
	}

	public String getAssignedCourses() {
		return assignedCourses;
	}

	public void setAssignedCourses(String assignedCourses) {
		this.assignedCourses = assignedCourses;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
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

	public Learner(int learnerId, String firstName, String lastName, String emailId, Long phoneNumber,
			String branchName, String assignedCourses, String address, Date startDate, Date endDate, String userName,
			String password) {
		super();
		this.learnerId = learnerId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.phoneNumber = phoneNumber;
		this.branchName = branchName;
		this.assignedCourses = assignedCourses;
		this.address = address;
		this.startDate = startDate;
		this.endDate = endDate;
		this.userName = userName;
		this.password = password;
	}

	public Learner() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	
}
