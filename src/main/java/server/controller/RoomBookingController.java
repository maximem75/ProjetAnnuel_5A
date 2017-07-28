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
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

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
    public void addRoomBooking(@RequestBody List<RoomBooking> listRoomBooking, @RequestParam("token") String token) {
        /*Client client = clientService.findByToken(token);

        if (client != null) {*/
        //int refNumber = roomBookingService.getNumberRefBook(client.getId());
        //String refBookRoom = client.getId() + "_" + refNumber;
        boolean available = true;

        //Rechercher les chambres dans un seul batiment
        //Non terminé, rechercher par catégorie de chambre et batiment celles disponibles
        //Check dates
        for (RoomBooking roomBooking : listRoomBooking) {
            List<RoomBooking> listRoomBookingBdd = roomBookingService.getListRoomBookingById(roomBooking.getIdRoom());
            if (listRoomBookingBdd.size() > 0) {
                for (RoomBooking rb : listRoomBookingBdd) {
                    available = dateComparer.dateRoomBookingAvailable(roomBooking, rb);
                    if (available == false) {
                        return;
                    }
                }
            }
        }

        for (RoomBooking rb : listRoomBooking) {
            rb.setRefRoomBook("");
            rb.setStatus("inactive");
            rb.setDateBook(new Date());
            roomBookingService.addRoomBooking(rb);
        }

        /*}*/

        //EXAMPLE
        /*
        [
        {
            "dateStart": "2017-09-31",
            "dateEnd": "2017-10-30",
            "idClient": 1,
            "idRoom": 140,
            "reason": "vacances"
	    },
	    {
            "dateStart": "2017-09-31",
            "dateEnd": "2017-10-30",
            "idClient": 1,
            "idRoom": 141,
            "reason": "vacances"
	    }
        ]
         */

    }

    @RequestMapping(path = "validate", method = POST)
    @ResponseStatus(value = OK)
    public void updateListRoomBookingStatus(@RequestParam("refBookRoom") String refBookRoom) {
        List<RoomBooking> listRoomBooking = roomBookingService.getListRoomBookingByRefBookRoom(refBookRoom);

        for (RoomBooking rb : listRoomBooking) {
            rb.setStatus("active");
            roomBookingService.updateRoomBooking(rb);
        }
    }
}
