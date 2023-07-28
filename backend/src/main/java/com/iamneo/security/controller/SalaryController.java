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
import com.iamneo.security.entity.salary_details;
import com.iamneo.security.service.attendance_serv;
import com.iamneo.security.service.salary_serv;

import lombok.RequiredArgsConstructor;
@RequiredArgsConstructor
@CrossOrigin(origins="*")
@RestController
public class SalaryController {
	
	private final salary_serv serv;
	
	@PostMapping("/SalaryAddDetails")
	public salary_details addInfo(@RequestBody salary_details st)
	{
		return serv.saveDetails(st);
	}
	
	@GetMapping("/SalaryshowDetails")
	public List<salary_details> fetchDetails()
	{
		return serv.getDetails();
	}
//	@PutMapping("/attendanceUpdateDetails/{id}")
//	public ResponseEntity<attendance> updateInfo(@PathVariable Long id,@RequestBody attendance st1)
//	{
//		attendance updatedEmp = serv.updateDetails(id,st1);
//		return ResponseEntity.ok(updatedEmp);
////	}
	
	
	
//	@DeleteMapping("/SalaryDelete/{eid}")
//	public String deleteInfo(@PathVariable("eid")Long eid)
//	{
//		serv.deleteDetails(eid);
//		return "Deleted details";
//	}
//	//sorting
//			@GetMapping("/SalarySorting/{field}")
//			public List<salary_details> getWithSort(@PathVariable String field) {
//				return serv.getSorted(field);
//			}
//
//			// pagination
//			@GetMapping("/SalaryPagination/{offset}/{pageSize}")
//			public List<salary_details> productsWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
//				return serv.getWithPagination(offset, pageSize);
//			}
}