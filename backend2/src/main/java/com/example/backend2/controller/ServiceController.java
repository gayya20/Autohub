package com.example.backend2.controller;

import com.example.backend2.exception.UserNotFoundException;
import com.example.backend2.model.Service;
import com.example.backend2.model.User;
import com.example.backend2.repository.ServiceRepository;
import com.example.backend2.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
public class ServiceController {
    @Autowired
    private ServiceRepository serviceRepository;


    @PostMapping("/addService")
    Service createNewService(@RequestBody Service newService){
        return serviceRepository.save(newService);
    }

//    @GetMapping("/getUser")
//    List<User> getAllUsers(){
//        return userRepository.findAll();
//    }

    @GetMapping("/service/{serviceProviderID}")
    List<Service> getServiceByServiceProvider(@PathVariable Long serviceProviderID) {
        return serviceRepository.findAllByServiceProviderId(serviceProviderID);
    }
//    @PutMapping("/user/{id}")
//    User updateUser(@RequestBody User newUser, @PathVariable Long id) {
//        return userRepository.findById(id)
//                .map(user -> {
//                    user.setUsername(newUser.getUsername());
//                    user.setName(newUser.getName());
//                    user.setEmail(newUser.getEmail());
//                    return userRepository.save(user);
//                }).orElseThrow(() -> new UserNotFoundException(id));
//    }
//    @DeleteMapping("/user/{id}")
//    String deleteUser(@PathVariable Long id){
//        if(!userRepository.existsById(id)){
//            throw new UserNotFoundException(id);
//        }
//        userRepository.deleteById(id);
//        return  "User with id "+id+" has been deleted success.";
//    }

}
