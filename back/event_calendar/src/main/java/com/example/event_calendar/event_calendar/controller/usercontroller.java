package com.example.event_calendar.event_calendar.controller;
import jakarta.persistence.*;

import java.util.Optional;
import org.h2.engine.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.event_calendar.Repository.loginRequest;
import com.example.event_calendar.Repository.userRepository;


@RestController
@RequestMapping("/api/user")
public class usercontroller {
    private final userRepository UserRepository;

    public usercontroller(userRepository UserRepository) {
        this.UserRepository = UserRepository;
    }

    @PostMapping("/signup") //회원가입입
    public ResponseEntity<String> signUp(@RequestBody User user) {
        UserRepository.save(user); 
        return ResponseEntity.ok("회원가입이 완료되었습니다.");
    }

    @PostMapping("/login") //로그안안
    public ResponseEntity<String> login(@RequestBody loginRequest loginRequest) {
        Optional<User> user = userRepository.findByNameAndPassword(
                loginRequest.getName(), loginRequest.getPhone());

        if (user.isPresent()) {
            return ResponseEntity.ok("로그인 성공!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인 실패! (Invalid username or password)");
        }
    }

    
}