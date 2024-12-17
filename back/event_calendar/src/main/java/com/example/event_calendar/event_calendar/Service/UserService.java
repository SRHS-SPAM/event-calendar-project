package com.example.event_calendar.event_calendar.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.event_calendar.event_calendar.Repository.UserRepository;
import com.example.event_calendar.event_calendar.model.User;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String registerUser(String name, String phoneNumber, String birthday) {
        if (userRepository.findByPhoneNumber(phoneNumber).isPresent()) {
            return "이미 존재하는 전화번호입니다.";
        }
        if (name == null || name.isEmpty()) {
            return "이름을 입력해 주세요.";
        }
        if (phoneNumber == null || phoneNumber.isEmpty()) {
            return "전화번호를 입력해 주세요.";
        }
        if (birthday == null || birthday.isEmpty()) {
            return "생일을 입력해 주세요.";
        }
        User user = new User(null, name, phoneNumber, birthday);
        userRepository.save(user);
        return "회원가입 성공!";
    }

    public String loginUser(String name, String phoneNumber) {
        if (name == null || name.isEmpty()) {
            if(phoneNumber == null || phoneNumber.isEmpty()) {
                return "이름과 전화번호를 모두 입력해야 합니다.";
            }
            else {
                return "이름을 입력하세요.";
            }
        }
        else if(phoneNumber == null || phoneNumber.isEmpty()){
            return "전화번호를 입력하세요.";
        } 
        
        Optional<User> user = userRepository.findByNameAndPhoneNumber(name, phoneNumber);
        return user.isPresent() ? "로그인 성공!" : "회원정보가 존재하지 않습니다.";
    }
    
}