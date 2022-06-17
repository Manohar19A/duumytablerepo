package com.ClientAdmin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ClientAdmin.Entity.Client;

@Repository
public interface ClientAdminRepository extends JpaRepository<Client, Integer>{
	

}
