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
import com.iamneo.security.entity.employee_performance;
import com.iamneo.security.service.attendance_serv;
import com.iamneo.security.service.emp_perform_serv;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins="*")
@RequiredArgsConstructor
@RestController
public class Emp_perform_controller {
	
	private final emp_perform_serv serv;
	@PostMapping("/EmpAddDetails")
	public ResponseEntity<String> addInfo(@RequestBody employee_performance e)
	{
		serv.saveDetails(e);
		return ResponseEntity.ok("Employee added");
	}

	@GetMapping("EmpShowDetails")
	public ResponseEntity<List<employee_performance>> fetchDetails(){
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(serv.getDetails());
	}
	
//	@PutMapping("/attendanceUpdateDetails/{id}")
//	public ResponseEntity<attendance> updateInfo(@PathVariable Long id,@RequestBody attendance st1)
//	{
//		attendance updatedEmp = serv.updateDetails(id,st1);
//		return ResponseEntity.ok(updatedEmp);
////	}
	//sorting
//			@GetMapping("/EmpSorting/{field}")
//			public List<employee_performance> getWithSort(@PathVariable String field) {
//				return serv.getSorted(field);
//			}
//
//			// pagination
//			@GetMapping("/EmpPagination/{offset}/{pageSize}")
//			public List<employee_performance> productsWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
//				return serv.getWithPagination(offset, pageSize);
//			}
}