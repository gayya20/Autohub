package com.example.backend2.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Service {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private  String service;
    private String vehicleNumber;

    private Long serviceProviderID;

    public Long getServiceProviderID() {
        return serviceProviderID;
    }

    public void setServiceProviderID(Long serviceProviderID) {
        this.serviceProviderID = serviceProviderID;
    }

    public Service() {
    }


    public Service(Long id, String name, String service, String vehicleNumber, Long serviceProviderID) {
        this.id = id;
        this.name = name;
        this.service = service;
        this.vehicleNumber = vehicleNumber;
        this.serviceProviderID = serviceProviderID;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getService() {
        return service;
    }

    public void setService(String service) {
        this.service = service;
    }

    public String getVehicleNumber() {
        return vehicleNumber;
    }

    public void setVehicleNumber(String vehicleNumber) {
        this.vehicleNumber = vehicleNumber;
    }


}
