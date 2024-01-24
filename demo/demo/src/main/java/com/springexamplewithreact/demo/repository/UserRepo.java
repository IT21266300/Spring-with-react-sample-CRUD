package com.springexamplewithreact.demo.repository;

import com.springexamplewithreact.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Long> {

}
