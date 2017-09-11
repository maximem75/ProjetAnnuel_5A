package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import server.model.RestaurantTableBooking;
import server.repository.RestaurantTableBookingRepository;
import server.service.ClientService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

/**
 * Created by maxime on 09/09/2017.
 */
@RestController
@RequestMapping("/api/restaurantTableBooking")
public class RestaurantTableBookingController {

    @Autowired
    private RestaurantTableBookingRepository restaurantTableBookingRepository;

    @Autowired
    private ClientService clientService;

    //TODO Créer méthode pour reserver une table

    @RequestMapping(method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public List<RestaurantTableBooking> listRestaurantTableBooking(@RequestParam("token") String token){

        if(clientService.adminAccess(token)){
            return restaurantTableBookingRepository.findAll();
        }

        return null;
    }
}
