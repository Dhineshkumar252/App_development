package com.iamneo.security.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.admin;

public interface AdminRepo extends JpaRepository<admin, Long> {
    Optional<admin> findByEmail(String email);
}
