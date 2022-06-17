package com.arshaa.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.arshaa.Entity.ContentCreator;

@Repository
public interface ContentCreatorRepository extends JpaRepository<ContentCreator, Integer>  {
	
//	Optional<ContentCreator> findByFirstName(String FirstName);
//    Optional<ContentCreator> findByEmail(String Email);	
//    Optional<ContentCreator> findByCreatorId(int CreatorId);
//    Optional<ContentCreator> findByPhoneNumber(Long PhoneNumber);
//	List<ContentCreator> findAll();
//	ContentCreator save(ContentCreator creator);



}
