package com.example.event_calendar.event_calendar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.event_calendar.event_calendar.Service.UserService;

@RestController
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

}