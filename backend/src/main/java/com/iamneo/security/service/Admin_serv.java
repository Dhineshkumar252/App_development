package com.iamneo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.iamneo.security.entity.admin;
import com.iamneo.security.repository.AdminRepo;
@Service
public class Admin_serv 

{
	@Autowired
	AdminRepo repo;
	
	public admin saveDetails(admin e)
	{
		return repo.save(e);
	}
	
	public List<admin> getDetails()
	{
		return repo.findAll();
	}
//	public List<admin> getSorted(String field) {
//		return repo.findAll(Sort.by(Sort.Direction.ASC,field));
//	}
//	public List<admin> getWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
//		Page<admin> page =repo.findAll(PageRequest.of(offset, pageSize));
//		return page.getContent();
//	}
//	public admin updateDetails(admin e1)
//	{
//		return repo.saveAndFlush(e1);
//	}
//	public void deleteDetails(long id) 
//	{
//		repo.deleteById(id);
//	}
	
}