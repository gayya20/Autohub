package com.example.backend2.controller;

import com.example.backend2.model.ServiceProviders;
import com.example.backend2.repository.SPRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
public class ServiceProviderController {

    @Autowired
    private SPRepository spRepository;

    @PostMapping("/addSP")
    public ServiceProviders newServiceProviders(@RequestBody ServiceProviders newServiceProviders) {
        return spRepository.save(newServiceProviders);
    }

    @GetMapping("/serviceProviders")
    public List<ServiceProviders> getAllServiceProviders() {
        return spRepository.findAll();
    }

    @DeleteMapping("/serviceProviders/{id}")
    public void deleteServiceProvider(@PathVariable Long id) {
        spRepository.deleteById(id);
    }
}
