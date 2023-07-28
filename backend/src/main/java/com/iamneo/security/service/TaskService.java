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

import com.iamneo.security.repository.Repo;

import com.iamneo.security.entity.*;
@Service
public class TaskService

{   @Autowired
    private Repo studentRepository;
    public List<Task> getAllStudents() {
        return studentRepository.findAll();
    }
    public Task getStudentById(Long id) {
        return studentRepository.findById(id).get();
    }
    public boolean createStudent(Task student) {
        return studentRepository.save(student) != null? true:false;
    }
    public Task updateStudent(Long id, Task student) {
        Task stu = studentRepository.findById(id).get();
//        stu.setTask_name(student.getTask_name());
//        stu.setTask_type(student.getTask_type());
//        stu.setDescription(student.getDescription());
//        stu.setStartdate(student.getStartdate());
//        stu.setEnddate(student.getEnddate());
//        stu.setPriority(student.getPriority());
      return studentRepository.save(stu);
    }
    public boolean deleteStudent(Long id) {
        if(studentRepository.findById(id).isPresent()){
            studentRepository.deleteById(id);
          return true;
        } 
        return false;
    }
}