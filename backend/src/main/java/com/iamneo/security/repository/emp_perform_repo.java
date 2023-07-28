
package com.iamneo.security.repository;


import org.springframework.data.domain.Sort.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.employee_performance;
@Repository
public interface emp_perform_repo extends JpaRepository<employee_performance,Integer>{

	void deleteById(Long id);

	Streamable<Order> findById(Long id);

}