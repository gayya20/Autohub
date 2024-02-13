package com.example.backend2.repository;

import com.example.backend2.model.ServiceProviders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SPRepository extends JpaRepository<ServiceProviders,Long> {
}
