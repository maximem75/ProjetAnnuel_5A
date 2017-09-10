package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.RestaurantTable;
import server.repository.RestaurantTableRepository;
import server.service.RestaurantTableService;
import java.util.List;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping("/api/restaurant")
public class RestaurantTableController {

    @Autowired
    private RestaurantTableRepository restaurantTableRepository;

    @RequestMapping( path = "/all", method = GET)
    @ResponseStatus(value = OK)
    public List<RestaurantTable> getAllTablesList(){
        List<RestaurantTable> listTables = restaurantTableRepository.findAll();
        return listTables;
    }
}