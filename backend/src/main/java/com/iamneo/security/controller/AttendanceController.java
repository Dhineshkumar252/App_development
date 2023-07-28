package com.iamneo.security.controller;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort.Order;
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
import com.iamneo.security.service.attendance_serv;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins="*")
@RequiredArgsConstructor
@RestController
public class AttendanceController {

	private final attendance_serv serv;
	
	@GetMapping("/attendanceAddDetails")
	public ResponseEntity<List<attendance>> fetchDetails(){
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(serv.getDetails());
	}
//	@GetMapping("/attendanceAddDetails/{id}")
//	public ResponseEntity<List<attendance>> fetchDetails(@PathVariable Long id){
//		return ResponseEntity.status(HttpStatus.ACCEPTED).body(serv.getDetails(id));
//	}
	@PostMapping("/attendanceShowDetails")
	public ResponseEntity<String> create(@RequestBody attendance e)
	{
		serv.saveDetails(e);
		return ResponseEntity.ok("Employee added");
	}
	
	
//	@PutMapping("/attendanceUpdateDetails/{id}")
//	public ResponseEntity<attendance> updateInfo(@PathVariable Long id,@RequestBody attendance st1)
//	{
//		attendance updatedEmp = serv.updateDetails(id,st1);
//		return ResponseEntity.ok(updatedEmp);
////	}
//	@DeleteMapping("/attendanceDelete/{eid}")
//	public ResponseEntity<HttpStatus> deleteInfo(@PathVariable Long eid)
//	{
//		serv.deleteDetails(eid);
//		return ResponseEntity.ok(HttpStatus.NO_CONTENT);
//	}
//	@GetMapping("/{id}")
//	public Stream<Order> getEmployeeById(@PathVariable Long id)
//	{
//	    return serv.getEmployeeById(id);
//	}
	//sorting
//			@GetMapping("/attendanceSorting/{field}")
//			public List<attendance> getWithSort(@PathVariable String field) {
//				return serv.getSorted(field);
//			}

			// pagination
//			@GetMapping("/attendancePagination/{offset}/{pageSize}")
//			public List<attendance> productsWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
//				return serv.getWithPagination(offset, pageSize);
//			}
}