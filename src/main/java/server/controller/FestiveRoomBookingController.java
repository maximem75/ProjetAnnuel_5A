package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import server.service.FestiveRoomBookingService;

/**
 * Created by molla on 27/08/2017.
 */

@RestController
@RequestMapping("/api/festiveRoomBooking")
public class FestiveRoomBookingController {

    @Autowired
    private FestiveRoomBookingService festiveRoomBookingService;
}
