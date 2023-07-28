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
import org.springframework.web.bind.annotation.RequestBody;

import com.iamneo.security.entity.salary_details;
import com.iamneo.security.repository.salary_repo;
@Service
public class salary_serv 

{
	@Autowired
	salary_repo repo;
	
	public salary_details saveDetails(@RequestBody salary_details e)
	{
		return repo.save(e);
	}
	
	public List<salary_details> getDetails()
	{
		return repo.findAll();
	}
//	public List<salary_details> getSorted(String field) {
//		return repo.findAll(Sort.by(Sort.Direction.ASC,field));
//	}
//	public List<salary_details> getWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
//		Page<salary_details> page =repo.findAll(PageRequest.of(offset, pageSize));
//		return page.getContent();
//	}
	public salary_details updateDetails(salary_details e1)
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