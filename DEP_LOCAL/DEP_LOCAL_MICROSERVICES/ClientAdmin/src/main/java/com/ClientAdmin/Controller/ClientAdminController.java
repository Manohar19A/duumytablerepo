package com.ClientAdmin.Controller;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ClientAdmin.Entity.Client;
import com.ClientAdmin.repository.ClientAdminRepository;
import com.ClientAdmin.service.ServiceImplementation;
import com.ClientAdmin.service.ServiceInterface;



@RestController
@RequestMapping("/client")
@CrossOrigin("*")
public class ClientAdminController {
	 
		@Autowired
		private ClientAdminRepository repo;
		
		
		@Autowired
		private ServiceImplementation serv;
		
	@PostMapping("/saveClient")
	public ResponseEntity saveClientAdmin(@RequestBody Client admin) {
		return serv.saveClientAdmin(admin);
	}

	
	@GetMapping("/getAllData")
	public ResponseEntity getAllData() {
	return  serv.getAllData();
	} 
	
	@DeleteMapping("/deleteclient/{clientId}")
	public ResponseEntity deleteClient(@PathVariable int  clientId)
	{
	  return serv.deleteClientAdmin(clientId);
	}
	
	
	// put/update data
	@PutMapping("/updateClient/{clientId}")
	public ResponseEntity updateclientById(@RequestBody Client co, @PathVariable Integer clientId)
	{
		return serv.updateClientAdmin(clientId,co);
		
	}
	
	}

 