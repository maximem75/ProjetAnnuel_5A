package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import server.model.Client;
import server.model.FestiveRoom;
import server.service.ClientService;
import server.service.FestiveRoomBookingServicesService;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

/**
 * Created by maxime on 09/09/2017.
 */
@RestController
@RequestMapping("/api/festiveRoomBookingServices")
public class FestiveRoomBookingServicesController {

    @Autowired
    private FestiveRoomBookingServicesService festiveRoomBookingServicesService;

    @Autowired
    private ClientService clientService;


}
