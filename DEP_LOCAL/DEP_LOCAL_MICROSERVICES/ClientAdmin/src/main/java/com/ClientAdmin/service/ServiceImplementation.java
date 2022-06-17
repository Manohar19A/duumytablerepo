package com.ClientAdmin.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.ClientAdmin.Entity.Client;
import com.ClientAdmin.common.UserLogin;
import com.ClientAdmin.model.ClientAdminResponse;
import com.ClientAdmin.repository.ClientAdminRepository;

@Service
public class ServiceImplementation implements ServiceInterface {

	@Autowired
	ClientAdminRepository caRepo;
	
	@Autowired
	@Lazy
	private RestTemplate template;
	
	@Override
	public ResponseEntity findAllClientAdmin() {
		
		return null;
	}

	@Override
	public ResponseEntity saveClientAdmin(Client admin) {

		String url="http://loginservice/login/addUsers";
		ClientAdminResponse response=new ClientAdminResponse();
		try {
			Client c=caRepo.save(admin);
			response.setStatus(true);
			response.setMessage("Client created successfully");
			response.setData(c);
			UserLogin login =new UserLogin();
			login.setEmailId(admin.getEmail());
			login.setLoginUserName(admin.getUserName());
			login.setPassword(admin.getPassword());
			login.setUserType(admin.getUserType());
			template.postForObject(url, login, UserLogin.class);
			return new ResponseEntity(response,HttpStatus.OK);
		}
		catch(Exception e)
		{
			response.setStatus(false);
			response.setMessage("Error message: Something went wrong");
			return new ResponseEntity(response,HttpStatus.OK);
		}				
	}

	@Override
	public ResponseEntity updateClientAdmin(int clientId, Client admin) {

		ClientAdminResponse response=new ClientAdminResponse();
		try {
			Client getData=caRepo.getById(clientId);
			if(!getData.equals(null))
			{
				getData.setAddress(admin.getAddress());
				getData.setClientIdProof(admin.getClientIdProof());
				getData.setCountry(admin.getCountry());
				getData.setEmail(admin.getEmail());
				getData.setFirstName(admin.getFirstName());
				getData.setLastName(admin.getLastName());
				getData.setPassword(admin.getPassword());
				getData.setPhoneNo(admin.getPhoneNo());
				getData.setSubscriptionStartDate(admin.getSubscriptionStartDate());
				getData.setSubscriptionEndDate(admin.getSubscriptionEndDate());
				getData.setUserName(admin.getUserName());
				getData.setUserType(admin.getUserType());
				
				Client updatedClient=caRepo.save(getData);
				response.setStatus(true);
				response.setMessage("Updated successfull");
				response.setData(updatedClient);
				return new ResponseEntity(response,HttpStatus.OK);
			}
			else {
				response.setStatus(false);
				response.setMessage("Data not found for that clientId");
				return new ResponseEntity(response,HttpStatus.OK);
			}
		}
		catch(Exception e)
		{
			response.setStatus(false);
			response.setMessage("Error message: Something went wrong");
			return new ResponseEntity(response,HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity deleteClientAdmin(int clientId) {
		
		ClientAdminResponse response=new ClientAdminResponse();
		
		try {
			Client getData=caRepo.getById(clientId);
			if(!getData.equals(null))
			{
				caRepo.delete(getData);
				response.setStatus(true);
				response.setMessage("Deleted successfull");
				return new ResponseEntity(response,HttpStatus.OK);
			}
			
			else {
				response.setStatus(false);
				response.setMessage("Data not found for that clientId");
				return new ResponseEntity(response,HttpStatus.OK);
			}

		}
		catch(Exception e)
		{
			response.setStatus(false);
			response.setMessage("Error message: Something went wrong");
			return new ResponseEntity(response,HttpStatus.OK);
		}
		
	}

	public ResponseEntity getAllData() {
		
		ClientAdminResponse response=new ClientAdminResponse();
		try {
			List<Client> getData=caRepo.findAll();
			if(!getData.isEmpty())
			{
				response.setStatus(true);
				response.setMessage("Data fetching");
				response.setData(getData);
				return new ResponseEntity(response,HttpStatus.OK);

			}
			else {
				response.setStatus(false);
				response.setMessage("Data Not Found");
				return new ResponseEntity(response,HttpStatus.OK);
			}
		}
		catch(Exception e)
		{
			response.setStatus(false);
			response.setMessage("Error message: Something went wrong");
			return new ResponseEntity(response,HttpStatus.OK);
		}				
	}
	
	
	
	

}
