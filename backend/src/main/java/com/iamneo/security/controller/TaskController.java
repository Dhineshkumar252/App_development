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

import com.iamneo.security.entity.Task;
import com.iamneo.security.service.*;




@CrossOrigin(origins="*")

@RestController
public class TaskController {
	@Autowired
	private TaskService apiService;
    @GetMapping("/showw")
	public List<Task> getAllStudents() {
        return apiService.getAllStudents();
    }
    @GetMapping("/show/{id}")
    public Task getStudentById(@PathVariable Long id) {
        return apiService.getStudentById(id);
    }
    @PostMapping("/add")
    public boolean createStudent(@RequestBody Task student) {
        return apiService.createStudent(student);
    }
    @PutMapping("/update/{id}")
    public Task updateStudent( @RequestBody Task student,@PathVariable Long id) {
        return apiService.updateStudent(id, student);
    }
    @DeleteMapping("/delete/{id}")
    public boolean deleteStudent(@PathVariable Long id) {
       return apiService.deleteStudent(id);
    }
}