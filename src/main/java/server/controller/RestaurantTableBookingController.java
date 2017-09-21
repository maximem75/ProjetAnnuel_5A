package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.Exception.ClientAlreadyBookTableException;
import server.Exception.RestaurantTableNotFreeException;
import server.model.Client;
import server.model.RestaurantTableBooking;
import server.repository.RestaurantTableBookingRepository;
import server.service.ClientService;
import server.service.RestaurantTableBookingService;

import java.util.Date;
import java.util.List;

import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.FOUND;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

/**
 * Created by maxime on 09/09/2017.
 */
@RestController
@RequestMapping("/api/restaurantTableBooking")
public class RestaurantTableBookingController {

    @Autowired
    private RestaurantTableBookingRepository restaurantTableBookingRepository;
    @Autowired
    private RestaurantTableBookingService restaurantTableBookingService;


    @Autowired
    private ClientService clientService;

    @RequestMapping(method = POST)
    @ResponseStatus(CREATED)
    public void addRestaurantTableBooking(@RequestBody RestaurantTableBooking restaurantTableBooking, @RequestParam("token") String token) {

        restaurantTableBooking.setBookingDate(new Date());

        if (clientService.findByToken(token) != null && restaurantTableBookingService.validateRestaurantTableBooking(restaurantTableBooking) != -1) {

            if (restaurantTableBookingService.validateRestaurantTableBooking(restaurantTableBooking) == 0) {

                if (!restaurantTableBookingService.clientAlreadyBook(12, 0, 13, 15, restaurantTableBooking.getIdClient())) {

                    if (restaurantTableBooking.getNumber() <= restaurantTableBookingService.getNumberPlaceFree(12, 0, 13, 15))
                        restaurantTableBookingRepository.save(restaurantTableBooking);
                    else
                        throw new RestaurantTableNotFreeException();

                } else {
                    throw new ClientAlreadyBookTableException();
                }

            }

            if (restaurantTableBookingService.validateRestaurantTableBooking(restaurantTableBooking) == 1) {
                if (!restaurantTableBookingService.clientAlreadyBook(19, 30, 21, 45, restaurantTableBooking.getIdClient())) {

                    if (restaurantTableBooking.getNumber() <= restaurantTableBookingService.getNumberPlaceFree(19, 30, 21, 45))
                        restaurantTableBookingRepository.save(restaurantTableBooking);
                    else
                        throw new RestaurantTableNotFreeException();

                } else {
                    throw new ClientAlreadyBookTableException();
                }

            }
        }
    }

    @RequestMapping(method = PUT)
    @ResponseStatus(ACCEPTED)
    public void updateRestaurantTableBooking(@RequestBody RestaurantTableBooking restaurantTableBooking, @RequestParam("token") String token) {
        if (clientService.findByToken(token) != null) {
            restaurantTableBookingRepository.save(restaurantTableBooking);
        }
    }

    @RequestMapping(method = GET)
    @ResponseStatus(FOUND)
    public List<RestaurantTableBooking> listRestaurantTableBooking(@RequestParam("token") String token) {

        if (clientService.adminAccess(token)) {
            return restaurantTableBookingRepository.findAll();
        }

        return null;
    }

    @RequestMapping(path = "/getByIdClient", method = GET)
    @ResponseStatus(FOUND)
    public List<RestaurantTableBooking> getListRestaurantTableByIdClient(@RequestParam("token") String token) {
        Client client = clientService.findByToken(token);

        if (client != null) {
            return restaurantTableBookingRepository.getListAvailableBookByIdClient(client.getId());
        }

        return null;
    }
}
