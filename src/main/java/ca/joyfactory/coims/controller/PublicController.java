package ca.joyfactory.coims.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

/**
 * Created by Joinsu on 2017-08-17.
 */
@RestController
public class PublicController {

    @RequestMapping(value = "/p-api", method =  RequestMethod.PUT)
    public boolean addConsultantObj(@RequestBody HashMap tester){
        boolean flag = false;
        if( tester != null){
            flag = true;
            System.out.println( tester);
        }
        return flag;
    }
}