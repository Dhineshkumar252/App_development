package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.*;




public interface Repo extends  JpaRepository<Feedback, Integer>{
	
}