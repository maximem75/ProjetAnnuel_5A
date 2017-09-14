package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.model.FestiveRoom;
import server.repository.FestiveRoomBookingRepository;

import java.util.Date;
import java.util.List;

/**
 * Created by molla on 27/08/2017.
 */

@Service
public class FestiveRoomBookingService {

    @Autowired
    private FestiveRoomBookingRepository festiveRoomBookingRepository;

}
