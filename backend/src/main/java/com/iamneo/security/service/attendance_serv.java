
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

import com.iamneo.security.entity.attendance;
import com.iamneo.security.repository.attendance_repo;
@Service
public class attendance_serv 

{
	@Autowired
	attendance_repo repo;
	
	public attendance saveDetails(attendance e)
	{
		return repo.save(e);
	}
	
	public List<attendance> getDetails()
	{
		return repo.findAll();
	}
	public Stream<Order> getEmployeeById(Long id)
	{
		return attendance.findById(id).get();
	}

	
//	public List<attendance> getSorted(String field) {
//		return repo.findAll(Sort.by(Sort.Direction.ASC,field));
//	}
//	public List<attendance> getWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
//		Page<attendance> page =repo.findAll(PageRequest.of(offset, pageSize));
//		return page.getContent();
//	}
//	public attendance updateDetails(attendance e1)
//	{
//		return repo.saveAndFlush(e1);
//	}
//
//	public void deleteDetails(Long eid) {
//		repo.deleteById(eid);
//		
//	}
	
}