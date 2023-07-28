package com.iamneo.security.entity;

import org.springframework.data.domain.Sort.Order;
import org.springframework.data.util.Streamable;

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
@Table(name = "attendance")
public class attendance {
	@Id
	@GeneratedValue
	private Long id;
	private String month;
	private int working_hours;
	private int leave_balances;
	private int days_present;
	public static Streamable<Order> findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	
}
