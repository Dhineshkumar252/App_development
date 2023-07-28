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

import com.iamneo.security.entity.employee_performance;
import com.iamneo.security.repository.emp_perform_repo;
@Service
public class emp_perform_serv

{
	@Autowired
	emp_perform_repo repo;
	
	public employee_performance saveDetails(employee_performance e)
	{
		return repo.save(e);
	}
	
	public List<employee_performance> getDetails()
	{
		return repo.findAll();
	}
	public List<employee_performance> getSorted(String field) {
		return repo.findAll(Sort.by(Sort.Direction.ASC,field));
	}
	public List<employee_performance> getWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
		Page<employee_performance> page =repo.findAll(PageRequest.of(offset, pageSize));
		return page.getContent();
	}
	public employee_performance updateDetails(employee_performance e1)
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