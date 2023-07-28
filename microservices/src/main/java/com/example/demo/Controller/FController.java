//package com.example.demo.Controller;
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.demo.Entity.Feedback;
//import com.example.demo.Service.FService;
//
//
//@RestController
//@CrossOrigin(origins= "*")
//public class FController {
//	@Autowired
//	FService ser;
//	@PostMapping("/send-data")
//	public Feedback saveFeedback(@RequestBody Feedback e) {
//		return ser.save(e);
//	}
//}

package com.example.demo.Controller;

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

import com.example.demo.Entity.Feedback;
import com.example.demo.Service.FService;
@RestController
@CrossOrigin
public class FController {
@Autowired
	private FService serv;
	@PostMapping("/send-data")
	public ResponseEntity<String> saveDet(@RequestBody Feedback e) {
		serv.saveDetails(e);
		return  ResponseEntity.ok("Details Added");
	}
	@GetMapping("/hotelFeedDetails")
	public List<Feedback> fetchDetails()
	{
		return serv.getDetails();
	}

}