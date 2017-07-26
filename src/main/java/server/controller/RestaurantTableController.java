package server.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.RestaurantTable;
import server.repository.RestaurantTableRepository;

import java.util.Date;
import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping("/api/restaurant")
public class RestaurantTableController {

    @Autowired
    private RestaurantTableRepository restaurantTableRepository;

    @RequestMapping( value = "/all", method = GET)
    public List<RestaurantTable> findAll(){
        return restaurantTableRepository.findAll();
    }

    @RequestMapping( value = "/{number}", method = GET)
    public RestaurantTable RestaurantTableById(@PathVariable final String number){
        return restaurantTableRepository.findByNumber(number);
    }

    @RequestMapping( method = POST)
  //  @RequestMapping( value = "/add", method = POST)
    public void add(@RequestBody RestaurantTable table){
//        public void add(@RequestBody final RestaurantTable table){
        restaurantTableRepository.save(table);
    }
    /*
    public RestaurantTable add(@RequestBody final RestaurantTable table){
        restaurantTableRepository.save(table);
        return restaurantTableRepository.findByNumber(table.getNumber());
    }*/

}