package com.dorgolombick.users.controller;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMethod;
@FeignClient("people")
public interface PeopleInterface {
//    @RequestMapping(method = RequestMethod.GET, value = "/stores")
//    List<person> getPeople();


}
