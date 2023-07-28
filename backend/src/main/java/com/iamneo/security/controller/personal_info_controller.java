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

import com.iamneo.security.entity.job_history;
import com.iamneo.security.entity.personal_info;
import com.iamneo.security.service.personal_info_serv;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins="*")
@RequiredArgsConstructor
@RestController
public class personal_info_controller {

	private final personal_info_serv serv;
	
	@PostMapping("/InfoAddDetails")
	public personal_info addInfo(@RequestBody personal_info st)
	{
		return serv.saveDetails(st);
	}

	@GetMapping("/personal_infoshowDetails")
	public List<personal_info> fetchDetails()
	{
		return serv.getDetails();
	}

	@PutMapping("/personal_infoUpdateDetails")
	public ResponseEntity<personal_info> updateInfo(@RequestBody personal_info st1)
	{
		personal_info updatedEmp = serv.updateDetails(st1);
		return ResponseEntity.ok(updatedEmp);
	}
	
	
//	@DeleteMapping("/trainingDelete/{eid}")
//	public ResponseEntity<HttpStatus> deleteInfo(@PathVariable Long eid)
//	{
//		serv.deleteDetails(eid);
//		return ResponseEntity.ok(HttpStatus.NO_CONTENT);
//	}
//	@DeleteMapping("/InfoDelete/{eid}")
//	public String deleteInfo(@PathVariable("eid")Long eid)
//	{
//		serv.deleteDetails(eid);
//		return "Deleted details";
//	}
//	//sorting
//			@GetMapping("/InfoSorting/{field}")
//			public List<personal_info> getWithSort(@PathVariable String field) {
//				return serv.getSorted(field);
//			}
//
//			// pagination
//			@GetMapping("/InfoPagination/{offset}/{pageSize}")
//			public List<personal_info> productsWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
//				return serv.getWithPagination(offset, pageSize);
//			}
}