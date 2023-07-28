
package com.iamneo.security.repository;


import org.springframework.data.domain.Sort.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.personal_performance;
@Repository
public interface person_perform_repo extends JpaRepository<personal_performance,Integer>{

	void deleteById(Long id);

	Streamable<Order> findById(Long id);

}