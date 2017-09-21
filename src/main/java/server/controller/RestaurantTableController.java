package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.RestaurantTable;
import server.repository.RestaurantTableRepository;
import server.service.ClientService;
import server.service.RestaurantTableService;

import java.util.List;

import static org.springframework.http.HttpStatus.*;
import static org.springframework.web.bind.annotation.RequestMethod.*;

@RestController
@RequestMapping("/api/restaurantTable")
public class RestaurantTableController {

    @Autowired
    private RestaurantTableRepository restaurantTableRepository;

    @Autowired
    private ClientService clientService;

    @RequestMapping(method = GET)
    @ResponseStatus(FOUND)
    public List<RestaurantTable> getAllTablesList(@Param("token") String token) {
        if (clientService.adminAccess(token)) {
            return restaurantTableRepository.findAll();
        }

        return null;
    }

    @RequestMapping(method = POST)
    @ResponseStatus(CREATED)
    public void createRestaurantTable(@RequestBody RestaurantTable restaurantTable, @RequestParam("token") String token) {
        if (clientService.adminAccess(token)) {
            restaurantTableRepository.save(restaurantTable);
        }
    }

    @RequestMapping(method = PUT)
    @ResponseStatus(ACCEPTED)
    public void updateRestaurantTable(@RequestBody RestaurantTable restaurantTable, @RequestParam("token") String token) {
        if (clientService.adminAccess(token)) {
            restaurantTableRepository.save(restaurantTable);
        }
    }

    @RequestMapping(method = DELETE)
    @ResponseStatus(OK)
    public void deleteRestaurantTable(@RequestParam("id") Long id, @RequestParam("token") String token) {
        if (clientService.adminAccess(token)) {
            restaurantTableRepository.delete(id);
        }
    }
}