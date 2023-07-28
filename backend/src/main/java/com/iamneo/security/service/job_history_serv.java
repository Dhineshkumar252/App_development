
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

import com.iamneo.security.entity.job_history;
import com.iamneo.security.repository.job_history_repo;
@Service
public class job_history_serv

{
	@Autowired
	job_history_repo repo;
	
	public job_history saveDetails(job_history e)
	{
		return repo.save(e);
	}
	
	public List<job_history> getDetails()
	{
		return repo.findAll();
	}
//	public List<job_history> getDetails(@PathVariable Long id)
//	{
//		return repo.findbyId(id);
//	}
//	public List<job_history> getSorted(String field) {
//		return repo.findAll(Sort.by(Sort.Direction.ASC,field));
//	}
//	public List<job_history> getWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
//		Page<job_history> page =repo.findAll(PageRequest.of(offset, pageSize));
//		return page.getContent();
//	}
//	public job_history updateDetails(job_history e1)
//	{
//		return repo.saveAndFlush(e1);
//	}
//	public void deleteDetails(Long id) 
//	{
//		repo.deleteById(id);
//	}

	
}