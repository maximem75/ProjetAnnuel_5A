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

    public List<RestaurantTable> getAllRestaurantTable(){
        return restaurantTableRepository.findAll();
    }

    public RestaurantTable getTableById(int id){
        return restaurantTableRepository.findById(id);
    }

    public RestaurantTable getTableByNumber(String number){
        return restaurantTableRepository.findByNumber(number);
    }

    public List<RestaurantTable> getTableByChairsNumber(int numberChairs){
        return restaurantTableRepository.findByNumberChairs(numberChairs);
    }

    public void addTable(RestaurantTable table){
        restaurantTableRepository.save(table);
    }

    public String deleteTable(int id){
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
