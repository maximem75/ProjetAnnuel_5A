package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import server.service.FestiveRoomBookingServicesService;

/**
 * Created by maxime on 09/09/2017.
 */
@RestController
@RequestMapping("/api/festiveRoomBookingServices")
public class FestiveRoomBookingServicesController {

    @Autowired
    private FestiveRoomBookingServicesService festiveRoomBookingServicesService;
}
