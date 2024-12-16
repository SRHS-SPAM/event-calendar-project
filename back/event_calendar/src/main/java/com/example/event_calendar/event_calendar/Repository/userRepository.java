package com.example.event_calendar.event_calendar.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.event_calendar.event_calendar.Entity.User;

@Repository
public interface userRepository extends JpaRepository<User, Long> {
    static Optional<User> findByNameAndPhone(String name, String phone) {
        throw new UnsupportedOperationException("Unimplemented method 'findByNameAndPhone'");
    }
}
