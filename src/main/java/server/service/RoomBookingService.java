package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.model.Room;
import server.model.RoomBooking;
import server.repository.RoomBookingRepository;

import java.util.List;

@Service
public class RoomBookingService {
    @Autowired
    private RoomBookingRepository roomBookingRepository;

    public void addRoomBooking(RoomBooking roomBooking){

        roomBookingRepository.save(roomBooking);
    }

    public List<RoomBooking> getListRoomBookingById(int idRoom){
        return roomBookingRepository.getListRoomBookingById(idRoom);
    }
}
