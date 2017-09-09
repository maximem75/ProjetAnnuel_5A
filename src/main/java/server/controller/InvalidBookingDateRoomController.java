package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import server.service.InvalidBookingDateRoomService;

/**
 * Created by maxime on 09/09/2017.
 */
@RestController
@RequestMapping("/api/invalidBookingDateRoom")
public class InvalidBookingDateRoomController {

    @Autowired
    private InvalidBookingDateRoomService invalidBookingDateRoomService;
}
