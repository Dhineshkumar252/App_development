package com.iamneo.security.service;


import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.iamneo.security.entity.personal_info;
import com.iamneo.security.repository.personal_info_repo;
@Service
public class personal_info_serv 

{
	@Autowired
	personal_info_repo repo;
	
	public personal_info saveDetails(personal_info e)
	{
		return repo.save(e);
	}
	
	public List<personal_info> getDetails()
	{
		return repo.findAll();
	}
	public List<personal_info> getSorted(String field) {
		return repo.findAll(Sort.by(Sort.Direction.ASC,field));
	}
	public List<personal_info> getWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
		Page<personal_info> page =repo.findAll(PageRequest.of(offset, pageSize));
		return page.getContent();
	}
	public personal_info updateDetails(personal_info e1)
	{
		return repo.saveAndFlush(e1);
	}
	public void deleteDetails(Long id) 
	{
		repo.deleteById(id);
	}
    public Stream<Order> getEmployeeById(Long id)
    {
        return repo.findById(id).get();
    }
	
}