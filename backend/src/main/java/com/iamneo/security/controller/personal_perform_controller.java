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
import com.iamneo.security.entity.personal_performance;
import com.iamneo.security.service.attendance_serv;
import com.iamneo.security.service.person_perform_serv;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins="*")
@RequiredArgsConstructor
@RestController
public class personal_perform_controller {

	private final person_perform_serv serv;
	

	@PostMapping("/PersonalAddDetails")
	public ResponseEntity<String> create(@RequestBody personal_performance st)
	{
		serv.saveDetails(st);
		return ResponseEntity.ok("Employee added");
	}
	
	@GetMapping("PersonalShowDetails")
	public ResponseEntity<List<personal_performance>> fetchDetails()
	{
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(serv.getDetails());
	}
//	@PutMapping("/attendanceUpdateDetails/{id}")
//	public ResponseEntity<attendance> updateInfo(@PathVariable Long id,@RequestBody attendance st1)
//	{
//		attendance updatedEmp = serv.updateDetails(id,st1);
//		return ResponseEntity.ok(updatedEmp);
////	}
	
	
//	@DeleteMapping("/PersonalDelete/{eid}")
//	public String deleteInfo(@PathVariable("eid")Long eid)
//	{
//		serv.deleteDetails(eid);
//		return "Deleted details";
//	}
	//sorting
//			@GetMapping("/PersonalSorting/{field}")
//			public List<personal_performance> getWithSort(@PathVariable String field) {
//				return serv.getSorted(field);
//			}
//
//			// pagination
//			@GetMapping("/PersonalPagination/{offset}/{pageSize}")
//			public List<personal_performance> productsWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
//				return serv.getWithPagination(offset, pageSize);
//			}
}