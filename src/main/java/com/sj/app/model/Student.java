package com.sj.app.model;

import javax.persistence.*;

@Entity
public class Student {
	
	@Id
	@GeneratedValue
	private Long id;
	
	private String fname;
	
	private String lname;
	
	private String email;
	
	private String place;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}
	
	
	
	

}
