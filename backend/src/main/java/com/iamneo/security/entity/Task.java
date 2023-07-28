package com.iamneo.security.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "task")
public class Task {
	@Id
	@Column(name="id")
	private Long id;
	@Column(name="Task_type")
	private String Task_type;
	@Column(name="Task_name")
	private String Task_name;
	@Column(name="Description")
	private String Description;
	@Column(name="Category")
	private String Category;
	@Column(name="startdate")
	private String startdate;
	@Column(name="enddate")
	private String enddate;
	@Column(name="priority")
	private String priority;
	@Column(name="notification")
	private String notification;


public Task(long id, String Task_type, String Task_name, String Description, String Category,
			String startdate, String enddate, String priority, String notification) {
		super();
		this.Task_type = Task_type;
		this.Task_name = Task_name;
		this.Description = Description;
		this.Category = Category;
		this.startdate = startdate;
		this.enddate = enddate;
		this.priority = priority;
		this.notification = notification;
		this.id = id;
}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getTask_type() {
		return Task_type;
	}
	public void setTask_type(String Task_type) {
		this.Task_type = Task_type;
	}
	public String getTask_name() {
		return Task_name;
	}
	public void setTask_name(String Task_name) {
		this.Task_name = Task_name;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String Description) {
		this.Description = Description;
	}
	public String getCategory() {
		return Category;
	}
	public void setCategory(String Category) {
		this.Category = Category;
	}
	public String getStartdate() {
		return startdate;
	}
	public void setStartdate(String startdate) {
		this.startdate = startdate;
	}
	public String getEnddate() {
		return enddate;
	}
	public void setEnddate(String enddate) {
		this.enddate = enddate;
	}
	public String getPriority() {
		return priority;
	}
	public void setPriority(String priority) {
		this.priority = priority;
	}
	public String getNotification() {
		return notification;
	}
	public void setNotification(String notification) {
		this.notification = notification;
	}
	public Task() {
		
	}
}
