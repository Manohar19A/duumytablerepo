package com.arshaa.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.arshaa.Entity.Learner;
import com.arshaa.Repository.LearnerRepository;
//import com.arshaa.Service.CreatorServiceInterface;

import net.bytebuddy.dynamic.DynamicType.Builder.FieldDefinition.Optional;





@RestController
@RequestMapping("/BranchAdmin")
//url for UI.
@CrossOrigin("*")
public class LearnerController {
	@Autowired
	private LearnerRepository learnerInterface;
	
     // API for get data.	
	@GetMapping("/getAllLearner")
//	public List<ContentCreator> getAllContentCreators() {
//		return creatorInterface.findAllContentCreators();
	public ResponseEntity<List<Learner>> getAllLearner() {
		try {
			List<Learner> lr=learnerInterface.findAll();
			return new ResponseEntity(lr,HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity("Something went wrong",HttpStatus.OK);
		}
	}
    
	@PostMapping("/addlearners")
	public ResponseEntity addlearner(@RequestBody Learner l) {
		try {
			Learner lr=learnerInterface.save(l);
           return new ResponseEntity(lr,HttpStatus.OK);
		}
		catch (Exception e) {
			return new ResponseEntity("Something went wrong",HttpStatus.OK);

		}
		 	}
	
	// put/update data
	@PutMapping("/updateLearner/{learnerId}")
	public 	ResponseEntity updateLearnerById(@RequestBody Learner contt, @PathVariable Integer learnerId)
	{
		try {
			Learner lr=new Learner();
			lr.setAddress(contt.getAddress());
			lr.setAssignedCourses(contt.getAssignedCourses());
			lr.setBranchName(contt.getBranchName());
			lr.setEmailId(contt.getEmailId());
			lr.setStartDate(contt.getStartDate());
			lr.setEndDate(contt.getEndDate());
			lr.setFirstName(contt.getFirstName());
			lr.setLastName(contt.getLastName());
			lr.setLearnerId(contt.getLearnerId());
			lr.setPhoneNumber(contt.getPhoneNumber());
			lr.setUserName(contt.getUserName());
			lr.setPassword(contt.getPassword());
			
			Learner updatedLearner=learnerInterface.save(lr);
			return new ResponseEntity("Updated Successfully",HttpStatus.OK);
		}
		catch (Exception e) {
			return new ResponseEntity("Something went wrong",HttpStatus.OK);

		}
		
	}
	// delete data
	@DeleteMapping("/deleteLearner/{learnerId}")
	public ResponseEntity deleteContentCreator(@PathVariable Integer learnerId)
	{
		try {
			learnerInterface.deleteById(learnerId);
			return new ResponseEntity("Deleted Successfully",HttpStatus.OK);

		}
		catch (Exception e) {
			return new ResponseEntity("Something went wrong",HttpStatus.OK);
		}
	}

}
