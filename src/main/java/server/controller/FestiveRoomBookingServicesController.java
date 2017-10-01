package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import server.model.FestiveRoomBookingServices;
import server.repository.FestiveRoomBookingServicesRepository;
import server.repository.FestiveRoomServiceRepository;
import server.service.ClientService;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

/**
 * Created by maxime on 09/09/2017.
 */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/festiveRoomBookingServices")
public class FestiveRoomBookingServicesController {

    @Autowired
    private FestiveRoomServiceRepository festiveRoomServiceRepository;
    @Autowired
    private FestiveRoomBookingServicesRepository festiveRoomBookingServicesRepository;

    @Autowired
    private ClientService clientService;

    @RequestMapping(method = GET)
    @ResponseStatus(OK)
    public List<FestiveRoomBookingServices> listFestiveRoomBookingServices(@RequestParam("token") String token) {
        if (clientService.findByToken(token) != null) {
            return festiveRoomBookingServicesRepository.findAll();
        }

        return null;
    }

    @RequestMapping(path = "/getById", method = GET)
    @ResponseStatus(OK)
    public List<FestiveRoomBookingServices> getFestiveRoomBookingServicesByIdFestiveRoomBooking(@RequestParam("id") Long id, @RequestParam("token") String token) {
        if (clientService.findByToken(token) != null) {
            return festiveRoomBookingServicesRepository.getFestiveRoomBookingServicesByIdFestiveRoomBooking(id);
        }

        return null;
    }

    @RequestMapping(method = POST)
    @ResponseStatus(CREATED)
    public List<FestiveRoomBookingServices> addFestiveRoomBookingServices(@RequestBody List<FestiveRoomBookingServices> listFestiveRoomBookingServices, @RequestParam("token") String token) {
        if (clientService.findByToken(token) != null) {
            for(FestiveRoomBookingServices f : listFestiveRoomBookingServices){
                festiveRoomBookingServicesRepository.save(f);
            }
        }

        return listFestiveRoomBookingServices;
    }

}
