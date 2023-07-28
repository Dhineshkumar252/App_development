
package com.iamneo.security.repository;


import org.springframework.data.domain.Sort.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.training_details;
@Repository
public interface training_repo extends JpaRepository<training_details,Integer>{

	void deleteById(Long id);

	Streamable<Order> findById(Long id);

}