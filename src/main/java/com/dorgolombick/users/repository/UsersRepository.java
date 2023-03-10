package com.dorgolombick.users.repository;

import com.dorgolombick.users.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource()
public interface UsersRepository extends JpaRepository<Users, Integer>, JpaSpecificationExecutor<Users>, QuerydslPredicateExecutor<Users> {}
