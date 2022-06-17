//package com.arshaa.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Service;
//
//import com.arshaa.Entity.ContentCreator;
//import com.arshaa.exceptions.ContentCreatorAlreadyPresent;
//import com.arshaa.repository.ContentCreatorRepository;
//import lombok.AllArgsConstructor;
//
//
//@Service
//@AllArgsConstructor
//public abstract class CreatorServiceImplementation implements CreatorServiceInterface {
//	
//	
//	 private final ContentCreatorRepository repository = null;
//	 
//     //	 get implementation
//	 @Override
//	 public List<ContentCreator> findAllContentCreators() {
//		    List<ContentCreator> allContentCreator = null;
//	        allContentCreator = (List<ContentCreator>) repository.findAll();
//	        return allContentCreator;
//		 
//		 
//	 }
//	 
//       //	 post implementation 
////	 @Override
////	 public ResponseEntity addContentCreator(ContentCreator creator) throws ContentCreatorAlreadyPresent {
////	        Optional<ContentCreator> contentCreator = repository.findByEmail(creator.getEmail());
////	        if (contentCreator.isPresent())
////	            throw new ContentCreatorAlreadyPresent("Content creator already present");
////	        ContentCreator savedCreator = repository.save(creator);
////	        return new ResponseEntity<>(savedCreator != null ? "Creator data saved successfully" : "Creator data not saved", HttpStatus.OK);
////	    }
//	 
//	 
//	 @Override
//	    public ResponseEntity addContentCreator(ContentCreator creator) throws ContentCreatorAlreadyPresent {
//	        Optional<ContentCreator> contentCreator = repository.findByEmail(creator.getEmail());
//	        if (contentCreator.isPresent())
//	            throw new ContentCreatorAlreadyPresent("Branch admin already present");
//	        ContentCreator savedCreator = repository.save(creator);
//	        return new ResponseEntity<>(savedCreator != null ? "Admin saved successfully" : "Admin not saved", HttpStatus.OK);
//	    }
//
//}
//
//
//
