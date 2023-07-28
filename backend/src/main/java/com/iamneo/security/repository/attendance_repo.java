package com.iamneo.security.repository;


import org.springframework.data.domain.Sort.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.attendance;
@Repository
public interface attendance_repo extends JpaRepository<attendance,Integer>{

	void deleteById(Long id);

	void findById(Long id);



}