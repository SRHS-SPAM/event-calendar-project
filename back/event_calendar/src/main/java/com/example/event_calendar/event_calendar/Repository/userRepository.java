package com.example.event_calendar.event_calendar.Repository;

import com.example.event_calendar.event_calendar.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByPhoneNumber(String phoneNumber);
    Optional<User> findByNameAndPhoneNumber(String name, String phoneNumber);
}