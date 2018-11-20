package com.sj.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sj.app.model.Student;
import com.sj.app.repository.StudentRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders="*" )
public class HescomController {
	
	@Autowired
	private StudentRepository repository;

	@GetMapping(value={"","/home","/index"})
	public String home(){
		
		return "Spring Boot is App is Created...";
	}
	
	@GetMapping("/students")
	public List<Student> getAllStudents(){
		return  repository.findAll();
	}
	
	@GetMapping("/student/{id}")
	public Optional<Student> getStudentsById(@PathVariable Long id){
		return repository.findById(id);
	}
	
	@DeleteMapping("/student/{id}")
	public boolean deleteStudentsById(@PathVariable Long id){
		repository.deleteById(id);
		return true;
	}
	
	@PostMapping("/student")
	public Student createStudent(@RequestBody Student student){
		return repository.save(student);
	}
	
	@PutMapping("/student")
	public Student updateStudent(@RequestBody Student student){
		return repository.save(student);
	}
	
}





