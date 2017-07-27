package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import server.model.RestaurantTable;
import server.repository.RestaurantTableRepository;
import java.util.List;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
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

    @RequestMapping( path = "/{number}", method = GET)
    public RestaurantTable RestaurantTableByTableNumber(@PathVariable String number){
        return restaurantTableRepository.findByNumber(number);
    }

    @RequestMapping( value = "/table/{id}", method = GET)
    public RestaurantTable RestaurantTableById(@PathVariable int id){
        return restaurantTableRepository.findById(id);
    }

    @RequestMapping( value = "/chairs/{numberOfChairs}", method = GET)
    public List<RestaurantTable> RestaurantTableByNumberOfChairs(@PathVariable String numberOfChairs){
        return restaurantTableRepository.findByNumberChairs(numberOfChairs);
    }

    @RequestMapping(method = POST)
    public void addTable(@RequestBody RestaurantTable table){
        restaurantTableRepository.save(table);
    }

    @RequestMapping( value = "/delete/{id}", method = DELETE)
    @ResponseBody
    public String deleteTable(@PathVariable int id){
        try{
            RestaurantTable r = restaurantTableRepository.findById(id);
            restaurantTableRepository.delete(r);
        }catch (Exception ex){
            return "Error deleting table : "+ex.toString();
        }
        return "restaurant table successfully deleted";
    }
}