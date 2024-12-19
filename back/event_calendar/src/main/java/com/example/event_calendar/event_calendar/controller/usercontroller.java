package com.example.event_calendar.event_calendar.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.example.event_calendar.event_calendar.Repository.UserRepository;
import com.example.event_calendar.event_calendar.Service.UserService;

@RestController
@EnableWebMvc
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup") //회원가입
    public String registerUser(
            @RequestParam String name,
            @RequestParam String phoneNumber,
            @RequestParam String birthday
            ){
        return userService.registerUser(name, phoneNumber, birthday);
    }

    @PostMapping("/login") //로그인
    public String loginUser(
        @RequestParam(required = false) String name,
        @RequestParam(required = false) String phoneNumber) {
    return userService.loginUser(name, phoneNumber);
    }

    @GetMapping("/users")
    public String getUser(Principal principal) {
        if (principal == null) {
            return "익명"; // 로그인하지 않은 경우
        }
        return principal.getName(); // 로그인한 경우 사용자 이름 반환
    }

    // @Autowired
    // private UserRepository userRepository;

    // @DeleteMapping("/delete") //회원탈퇴
    // public String deleteUser(Principal principal) {
    //     if (principal != null) {
    //         userRepository.deleteByUsername(principal.getName());
    //         return "회원 탈퇴되었습니다.";
    //     }
    //     return "로그인이 되어있지 않습니다.";
    // }

}