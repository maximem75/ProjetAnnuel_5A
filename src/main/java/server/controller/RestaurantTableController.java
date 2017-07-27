package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.RestaurantTable;
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
    private RestaurantTableService restaurantTableService;

    @RequestMapping( path = "/all", method = GET)
    @ResponseStatus(value = OK)
    public List<RestaurantTable> getAllTablesList(){
        List<RestaurantTable> listTables = restaurantTableService.getAllRestaurantTable();
        return listTables;
    }

    @RequestMapping( path = "/number/{number}", method = GET)
    @ResponseStatus(value = OK)
    public RestaurantTable getTableByNumber(@PathVariable String number){
        return restaurantTableService.getTableByNumber(number);
    }

    @RequestMapping( path = "/chairs/{numberChairs}", method = GET)
    @ResponseStatus(value = OK)
    public List<RestaurantTable> getTableByChairsNumber(@PathVariable int numberChairs){
        return restaurantTableService.getTableByChairsNumber(numberChairs);
    }

    @RequestMapping( path = "/{id}", method = GET)
    @ResponseStatus(value = OK)
    public RestaurantTable getTableById(@PathVariable int id){
        return restaurantTableService.getTableById(id);
    }

    @RequestMapping( method = POST)
    public void addTable(@RequestBody RestaurantTable restaurantTable){
        restaurantTableService.addTable(restaurantTable);
    }

    @RequestMapping( path = "/delete/{id}", method = DELETE)
    @ResponseStatus(HttpStatus.OK)
    public void deleteTable(@PathVariable int id) {
        restaurantTableService.deleteTable(id);
    }
}