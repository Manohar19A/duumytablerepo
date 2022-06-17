package com.arshaa.controller;

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

import com.arshaa.Entity.ContentCreator;
//import com.arshaa.Service.CreatorServiceInterface;
import com.arshaa.exceptions.ContentCreatorAlreadyPresent;
import com.arshaa.repository.ContentCreatorRepository;



@RestController
@RequestMapping("/superAdmin")
//url for UI.
@CrossOrigin("*")
public class ContentCreatorController {
	@Autowired
	private ContentCreatorRepository creatorInterface;
	
     // API for get data.	
	@GetMapping("/getAllContentCreators")
//	public List<ContentCreator> getAllContentCreators() {
//		return creatorInterface.findAllContentCreators();
	public List<ContentCreator> getAllContentCreators() {
		return creatorInterface.findAll();
	}
    
	// API for post data.
	@PostMapping("/addContentCreator")
//	public ResponseEntity addContentCreator(@RequestBody ContentCreator creator) throws ContentCreatorAlreadyPresent {
//		return creatorInterface.addContentCreator(creator);
	public ContentCreator saveCreator(@RequestBody ContentCreator creator ) {
		return creatorInterface.save(creator);
	}
	
//	put/update data 
	@PutMapping("/updateContentCreator/{creatorId}")
	public ContentCreator updateContentCreatorById(@RequestBody ContentCreator contt, @PathVariable Integer creatorId)
	{
		ContentCreator contentt= creatorInterface.findById(creatorId).get();
		//contentt.setCreatorId(contt.getCreatorId());
		contentt.setFirstName(contt.getFirstName());
		contentt.setLastName(contt.getLastName());
		contentt.setEmail(contt.getEmail());
		contentt.setPhoneNumber(contt.getPhoneNumber());
		contentt.setUserName(contt.getUserName());
		contentt.setPassword(contt.getPassword());
		contentt.setAddress(contt.getAddress());
		contentt.setCountry(contt.getCountry());
		
		return contentt;
	}
	
//	delete data
	@DeleteMapping("/deleteContentCreator/{creatorId}") 
	public void deleteContentCreator(@PathVariable Integer creatorId)
	{
		Optional<ContentCreator> cont=creatorInterface.findById(creatorId);
		creatorInterface.deleteById(creatorId);
	}
}
