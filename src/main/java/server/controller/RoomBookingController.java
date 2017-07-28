package server.controller;

import org.codehaus.groovy.runtime.powerassert.SourceText;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import server.model.Client;
import server.model.Room;
import server.model.RoomBooking;
import server.repository.ClientRepository;
import server.service.ClientService;
import server.service.RoomBookingService;
import server.service.RoomService;
import server.service.SecurityClientService;
import server.utils.DateComparer;

import java.util.Date;
import java.util.List;

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
    private RoomBookingService roomBookingService;

    @Autowired
    private DateComparer dateComparer;

    @RequestMapping(method = POST)
    @ResponseStatus(value = CREATED)
    public void addRoomBooking(@RequestBody RoomBooking roomBooking, @RequestParam("token") String token) {
        /*Client client = clientService.findByToken(token);

        if (client != null) {
            boolean available = true;

            roomBooking.setStatus("inactive");
            roomBooking.setDateBook(new Date());

            List<RoomBooking> listRoomBooking = roomBookingService.getListRoomBookingById(roomBooking.getIdRoom());

            if (listRoomBooking.size() > 0) {
                for (RoomBooking rb : listRoomBooking) {
                    available = dateComparer.dateRoomBookingAvailable(roomBooking, rb);
                    if(available == false){
                        return;
                    }
                }
            }
            roomBookingService.addRoomBooking(roomBooking);
        }*/

        boolean available = true;

        roomBooking.setStatus("inactive");
        roomBooking.setDateBook(new Date());

        List<RoomBooking> listRoomBooking = roomBookingService.getListRoomBookingById(roomBooking.getIdRoom());

        if (listRoomBooking.size() > 0) {
            for (RoomBooking rb : listRoomBooking) {
                available = dateComparer.dateRoomBookingAvailable(roomBooking, rb);
                if (available == false) {
                    return;
                }
            }
        }
        roomBookingService.addRoomBooking(roomBooking);
    }
}
