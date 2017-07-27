package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import server.model.RestaurantTable;
import server.repository.RestaurantTableRepository;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@Service
public class RestaurantTableService {

    @Autowired
    private RestaurantTableRepository restaurantTableRepository;

    @RequestMapping( value = "/all", method = GET)
    public List<RestaurantTable> getAllRestaurantTable(){
        return restaurantTableRepository.findAll();
    }

    @RequestMapping( value = "/{id}", method = GET)
    public RestaurantTable getTableById(@PathVariable int id){
        return restaurantTableRepository.findById(id);
    }

    @RequestMapping( value = "/number/{number}", method = GET)
    public RestaurantTable getTableByNumber(@PathVariable String number){
        return restaurantTableRepository.findByNumber(number);
    }

    @RequestMapping( value = "/numberchairs/{numberChairs}", method = GET)
    public List<RestaurantTable> getTableByChairsNumber(@PathVariable int numberChairs){
        return restaurantTableRepository.findByNumberChairs(numberChairs);
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
        return "table successfully deleted";
    }
/*
    public void updateRoom(Room room) {
        roomRepository.save(room);
    }
    */

}
