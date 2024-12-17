package com.example.event_calendar.event_calendar.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String phoneNumber;
    private String birthday;
}
//INSERT INTO users(id, name, phone_Number, birthday) VALUES(1, 'Lee', '010-6377-4010', '2024-12-18') << 쓸일 없어짐 근데 이거 쓰면 잘 추가되는거 확인함.