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

import com.iamneo.security.entity.admin;
import com.iamneo.security.entity.attendance;
import com.iamneo.security.service.Admin_serv;
import com.iamneo.security.service.attendance_serv;

import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
@RestController
@CrossOrigin(origins="*")
public class adminController {
	private final Admin_serv serv;
	
	@GetMapping("/AddDetails")
	public ResponseEntity<List<admin>> fetchDetails(){
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(serv.getDetails());
	}
//	@GetMapping("/attendanceAddDetails/{id}")
//	public ResponseEntity<List<attendance>> fetchDetails(@PathVariable Long id){
//		return ResponseEntity.status(HttpStatus.ACCEPTED).body(serv.getDetails(id));
//	}
	@PostMapping("/ShowDetails")
	public ResponseEntity<String> create(@RequestBody admin e)
	{
		serv.saveDetails(e);
		return ResponseEntity.ok("Details added");
	}
	
	
//	@GetMapping("/ShowDetails")
//	public List<admin> fetchDetails()
//	{
//		return serv.getDetails();
//	}
//	@PutMapping("/attendanceUpdateDetails/{id}")
//	public ResponseEntity<attendance> updateInfo(@PathVariable Long id,@RequestBody attendance st1)
//	{
//		attendance updatedEmp = serv.updateDetails(id,st1);
//		return ResponseEntity.ok(updatedEmp);
////	}

	//sorting
//			@GetMapping("/Sorting/{field}")
//			public List<admin> getWithSort(@PathVariable String field) {
//				return serv.getSorted(field);
//			}
//
//			// pagination
//			@GetMapping("/Pagination/{offset}/{pageSize}")
//			public List<admin> productsWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
//				return serv.getWithPagination(offset, pageSize);
//			}
}