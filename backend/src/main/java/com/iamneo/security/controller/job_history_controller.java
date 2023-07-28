package com.iamneo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.attendance;
import com.iamneo.security.entity.job_history;
import com.iamneo.security.service.attendance_serv;
import com.iamneo.security.service.job_history_serv;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins="*")
@RequiredArgsConstructor
@RestController
public class job_history_controller {

	private final job_history_serv serv;
	@PostMapping("/JobAddDetails")
	public job_history addInfo(@RequestBody job_history st)
	{
		return serv.saveDetails(st);
	}
	@GetMapping("/jobshowDetails")
	public List<job_history> fetchDetails()
	{
		return serv.getDetails();
	}
//	@GetMapping("/showDetails/{id}")
//	public List<job_history> fetchID(@PathVariable Long id)
//	{
//		return serv.getDetails(id);
//	}
//	@PutMapping("/attendanceUpdateDetails/{id}")
//	public ResponseEntity<attendance> updateInfo(@PathVariable Long id,@RequestBody attendance st1)
//	{
//		attendance updatedEmp = serv.updateDetails(id,st1);
//		return ResponseEntity.ok(updatedEmp);
////	}
	
	
	
	
	
//	@DeleteMapping("/JobDelete/{eid}")
//	public String deleteInfo(@PathVariable("eid")Long eid)
//	{
//		serv.deleteDetails(eid);
//		return "Deleted details";
//	}
//	//sorting
//			@GetMapping("/JobSorting/{field}")
//			public List<job_history> getWithSort(@PathVariable String field) {
//				return serv.getSorted(field);
//			}
//
//			// pagination
//			@GetMapping("/JobPagination/{offset}/{pageSize}")
//			public List<job_history> productsWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
//				return serv.getWithPagination(offset, pageSize);
//			}
}