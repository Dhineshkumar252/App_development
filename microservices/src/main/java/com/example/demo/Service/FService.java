package com.example.demo.Service;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.Entity.Feedback;
import com.example.demo.Repo.Repo;

@Service
public class FService 
{
	@Autowired
	Repo repo;
	
	public Feedback saveDetails(Feedback e)
	{
		return repo.save(e);
	}
	
	public List<Feedback> getDetails()
	{
		return repo.findAll();
	}
	}