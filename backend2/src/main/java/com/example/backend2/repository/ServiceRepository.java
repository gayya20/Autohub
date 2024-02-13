package com.example.backend2.repository;
import org.springframework.data.jpa.repository.Query;

import com.example.backend2.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ServiceRepository extends JpaRepository<Service,Long> {
    @Query(value = "SELECT * FROM service u WHERE u.service_providerid= ?1", nativeQuery = true)
    List<Service> findAllByServiceProviderId(Long spid);
}
