package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.FestiveRoomBooking;
import server.service.ClientService;
import server.service.FestiveRoomBookingService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;

/**
 * Created by molla on 27/08/2017.
 */

@RestController
@RequestMapping("/api/festiveRoomBooking")
public class FestiveRoomBookingController {

    @Autowired
    private FestiveRoomBookingService festiveRoomBookingService;

    @Autowired
    private ClientService clientService;

   /* @RequestMapping(method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public List<FestiveRoomBooking> getListFestiveRoomBookings(@RequestParam("token") String token) {

        if (clientService.adminAccess(token)) {

        }

        return null;
    }

    @RequestMapping(method = POST)
    @ResponseStatus(HttpStatus.CREATED)
    public void addFestiveRoomBooking(@RequestBody FestiveRoomBooking festiveRoomBooking, @RequestParam("token") String token) {
        if (clientService.adminAccess(token)) {

        }
    }

    @RequestMapping(method = PUT)
    @ResponseStatus(HttpStatus.OK)
    public void updateBuilding(@RequestBody Building building, @RequestParam("token") String token) {
        if (clientService.adminAccess(token)) {
            buildingService.updateBuilding(building);
        }
    }

    @RequestMapping(method = DELETE)
    @ResponseStatus(HttpStatus.OK)
    public void deleteBuilding(@RequestParam("id") int id, @RequestParam("token") String token) {
        if (clientService.adminAccess(token)) {
            buildingService.deleteBuilding(id);
        }
    }*/
}
