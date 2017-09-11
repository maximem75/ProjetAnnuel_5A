package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.Client;
import server.model.FestiveRoomBookingServices;
import server.repository.FestiveRoomBookingServicesRepository;
import server.service.ClientService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;

/**
 * Created by maxime on 09/09/2017.
 */
@RestController
@RequestMapping("/api/festiveRoomBookingServices")
public class FestiveRoomBookingServicesController {

    @Autowired
    private FestiveRoomBookingServicesRepository festiveRoomBookingServicesRepository;

    @Autowired
    private ClientService clientService;

    @RequestMapping(method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public List<FestiveRoomBookingServices> listFestiveRoomBookingServices(@RequestParam("token") String token) {
        if (clientService.findByToken(token) != null) {
            return festiveRoomBookingServicesRepository.findAll();
        }

        return null;
    }

    @RequestMapping(method = POST)
    @ResponseStatus(HttpStatus.CREATED)
    public void addFestiveRoomBookingServices(@RequestBody FestiveRoomBookingServices festiveRoomBookingServices, @RequestParam("token") String token) {
        if (clientService.adminAccess(token)) {
            festiveRoomBookingServicesRepository.save(festiveRoomBookingServices);
        }
    }

    @RequestMapping(method = PUT)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateFestiveRoomBookingServices(@RequestBody FestiveRoomBookingServices festiveRoomBookingServices, @RequestParam("token") String token) {
        if (clientService.adminAccess(token)) {
            festiveRoomBookingServicesRepository.save(festiveRoomBookingServices);
        }
    }

    @RequestMapping(method = DELETE)
    @ResponseStatus(HttpStatus.OK)
    public void deleteFestiveRoomBookingServices(@RequestParam("id") Long id, @RequestParam("token") String token) {
        if (clientService.adminAccess(token)) {
            festiveRoomBookingServicesRepository.delete(id);
        }
    }

}
