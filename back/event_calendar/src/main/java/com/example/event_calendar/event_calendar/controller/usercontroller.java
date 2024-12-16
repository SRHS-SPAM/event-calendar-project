package com.example.event_calendar.event_calendar.controller;

import com.example.event_calendar.event_calendar.repository.UserRepository;
import com.example.event_calendar.event_calendar.dto.LoginRequest;
import com.example.event_calendar.event_calendar.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        Optional<User> user = userRepository.findByNameAndPassword(
            loginRequest.getUsername(), loginRequest.getPassword()
        );

        if (user.isPresent()) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }
}
