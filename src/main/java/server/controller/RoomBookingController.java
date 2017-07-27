package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import server.model.Room;
import server.model.RoomBooking;
import server.repository.ClientRepository;
import server.service.ClientService;
import server.service.RoomService;

import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

//@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/roomBooking")
public class RoomBookingController {
    @Autowired
    private ClientService clientService;

    @Autowired
    private RoomService roomService;

    @RequestMapping(method = POST)
    @ResponseStatus(value = CREATED)
    public void addRoomBooking(@RequestBody RoomBooking roomBooking, @RequestParam("token") String token){

    }

}
