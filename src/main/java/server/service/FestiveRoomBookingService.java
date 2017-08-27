package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.repository.FestiveRoomBookingRepository;

/**
 * Created by molla on 27/08/2017.
 */

@Service
public class FestiveRoomBookingService {

    @Autowired
    private FestiveRoomBookingRepository festiveRoomBookingRepository;
}
