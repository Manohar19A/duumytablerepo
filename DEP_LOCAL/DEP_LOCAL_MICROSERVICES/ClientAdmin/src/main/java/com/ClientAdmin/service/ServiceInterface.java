package com.ClientAdmin.service;

import org.springframework.http.ResponseEntity;

import com.ClientAdmin.Entity.Client;

import java.util.List;

public interface ServiceInterface {

	public ResponseEntity findAllClientAdmin();
	
	public ResponseEntity saveClientAdmin(Client admin);
	
	ResponseEntity updateClientAdmin(int clientd, Client admin);

	ResponseEntity deleteClientAdmin(int ClientId);
	}

