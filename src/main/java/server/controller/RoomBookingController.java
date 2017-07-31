package server.controller;

import org.codehaus.groovy.runtime.powerassert.SourceText;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import server.model.*;
import server.repository.ClientRepository;
import server.service.*;
import server.utils.DateComparer;

import java.util.*;

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
    private RoomService roomService;

    @Autowired
    private BuildingService buildingService;

    @Autowired
    private RoomCategoryService roomCategoryService;

    @RequestMapping(method = POST)
    @ResponseStatus(value = CREATED)
    public void addRoomBooking(@RequestBody List<RoomBooking> listRoomBooking, @RequestParam("token") String token) {
        Client client = clientService.findByToken(token);

        if (client != null) {
            int nbr;
            boolean available = true;
            int refNumber = roomBookingService.getNumberRefBook(client.getId());
            String refBookRoom = "room_booking_" + client.getId() + "_" + refNumber;

            List<Room> listRoom = roomService.getListRoomFree(listRoomBooking.get(0).getDateStart(), listRoomBooking.get(0).getDateEnd());
            List<Building> listBuilding = buildingService.getListBuildings();
            HashMap<Integer, Integer> currentHm = new HashMap<Integer, Integer>();
            HashMap<Integer, Integer> hmRoomCategory = roomCategoryService.getHashMapCategoryFromListRoomBook(listRoomBooking);
            HashMap<Integer, Integer> hm = new HashMap<Integer, Integer>();

            for (Building b : listBuilding) {
                nbr = 0;
                currentHm = (HashMap<Integer, Integer>)  hmRoomCategory.clone();

                for (Room r : listRoom) {
                    HashMap<Integer, Integer> tempHm = (HashMap<Integer, Integer>) currentHm.clone();
                    Iterator it = tempHm.entrySet().iterator();

                    while (it.hasNext()) {
                        Map.Entry pair = (Map.Entry)it.next();
                        int pKey = (int) pair.getKey();
                        int pValue = (int) pair.getValue();

                        if (r.getIdBuilding() == b.getId() && r.getIdRoomCategory() == pKey && pValue > 0) {
                            int value = (int) pair.getValue() - 1;
                            currentHm.put(pKey, value);

                            nbr += 1;
                        }

                        it.remove();
                    }
                }

                hm.put(b.getId(), nbr);
            }

            Iterator it = hm.entrySet().iterator();
            while (it.hasNext()) {
                Map.Entry pair = (Map.Entry) it.next();
                //System.out.println(pair.getKey() + " = " + pair.getValue());

                it.remove();
            }

            for (RoomBooking rb : listRoomBooking) {
                rb.setRefRoomBook("");
                rb.setStatus("inactive");
                rb.setDateBook(new Date());
                //roomBookingService.addRoomBooking(rb);
            }

        }

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
