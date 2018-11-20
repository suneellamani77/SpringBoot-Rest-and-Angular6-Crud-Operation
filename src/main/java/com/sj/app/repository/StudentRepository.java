package com.sj.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sj.app.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long>{

}
