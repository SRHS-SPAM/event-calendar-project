package com.example.event_calendar.event_calendar.controller;

import java.time.LocalDate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DateController {  //오늘 날짜 가져오는 코드드
    @GetMapping("/date")
    public ResponseEntity<String> getCurrentData() {
        LocalDate today = LocalDate.now();
        System.out.println(today); //2024-12-15 같은 형식으로 뜸
        return ResponseEntity.ok(today.toString());
    }
}
