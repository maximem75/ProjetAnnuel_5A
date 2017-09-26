package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import server.Exception.FestiveRoomFreeException;
import server.Exception.GetFestiveRoomBookingByIdException;
import server.model.Client;
import server.model.FestiveRoomBooking;
import server.repository.FestiveRoomBookingRepository;
import server.service.ClientService;
import server.service.FestiveRoomBookingService;
import server.service.FestiveRoomService;

import java.util.Date;
import java.util.List;

import static org.springframework.http.HttpStatus.*;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

/**
 * Created by molla on 27/08/2017.
 */

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/festiveRoomBooking")
public class FestiveRoomBookingController {

    @Autowired
    private FestiveRoomService festiveRoomService;

    @Autowired
    private FestiveRoomBookingRepository festiveRoomBookingRepository;

    @Autowired
    private FestiveRoomBookingService festiveRoomBookingService;

    @Autowired
    private ClientService clientService;

    @RequestMapping(method = POST)
    @ResponseStatus(CREATED)
    public FestiveRoomBooking addFestiveRoomBooking(@RequestBody FestiveRoomBooking festiveRoomBooking, @RequestParam("token") String token) {

        if (clientService.findByToken(token) != null) {

            if(festiveRoomService.festiveRoomFree(festiveRoomBooking.getDateStart(), festiveRoomBooking.getDateEnd(), festiveRoomBooking.getIdFestiveRoom())){

                festiveRoomBooking.setDateBook(new Date());
                festiveRoomBooking.setStatus("inactive");

                return festiveRoomBookingRepository.save(festiveRoomBooking);
            } else {
                throw new FestiveRoomFreeException();
            }

        }

        return null;
    }

    @RequestMapping(path = "/validate", method = POST)
    @ResponseStatus(ACCEPTED)
    public FestiveRoomBooking validateFestiveRoomBooking(@RequestParam ("id") Long id, @RequestParam("token") String token) {

        if (clientService.findByToken(token) != null) {

            FestiveRoomBooking festiveRoomBooking = festiveRoomBookingRepository.getOne(id);

            if(festiveRoomBooking != null){
                festiveRoomBooking.setStatus("active");
                return festiveRoomBookingRepository.save(festiveRoomBooking);
            } else {
                throw new GetFestiveRoomBookingByIdException();
            }

        }

        return null;
    }

    @RequestMapping(path = "/getPrice", method = GET)
    @ResponseStatus(FOUND)
    public float getFestiveRoomBookingPrice(@RequestParam("id") Long id, @RequestParam("token") String token) {

        if (clientService.findByToken(token) != null) {
            FestiveRoomBooking festiveRoomBooking = festiveRoomBookingRepository.getOne(id);

            if(festiveRoomBooking != null)
                return festiveRoomBookingService.calculatePrice(id);
            else
                throw new GetFestiveRoomBookingByIdException();
        }

        return 0f;
    }

    @RequestMapping(method = GET)
    @ResponseStatus(FOUND)
    public List<FestiveRoomBooking> getListFestiveRoomBookings(@RequestParam("token") String token) {

        if (clientService.adminAccess(token)) {
            return festiveRoomBookingRepository.findAll();
        }

        return null;
    }

    @RequestMapping(path = "/getByIdClient", method = GET)
    @ResponseStatus(FOUND)
    public List<FestiveRoomBooking> getListFestiveRoomBookingByIdClient(@RequestParam("token") String token) {
        Client client = clientService.findByToken(token);

        if (client != null) {
            return festiveRoomBookingRepository.findByIdClient(client.getId());
        }

        return null;
    }
}
