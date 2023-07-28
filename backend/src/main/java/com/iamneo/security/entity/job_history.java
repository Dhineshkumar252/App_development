package com.iamneo.security.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "job_history")
public class job_history {
	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private String current_role;
	private String previous_role;
	private String hire_date;
	private String retirement_date;
	
	
	
}
