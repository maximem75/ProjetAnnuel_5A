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

    public void updateRoomBooking(RoomBooking roomBooking){
        roomBookingRepository.save(roomBooking);
    }

    public List<RoomBooking> getListRoomBookingById(int idRoom){
        return roomBookingRepository.getListRoomBookingById(idRoom);
    }

    public List<RoomBooking> getListRoomBookingByRefBookRoom(String refBookRoom){
        return roomBookingRepository.getListRoomBookingByRefBookRoom(refBookRoom);
    }

    public int getNumberRefBook(int idClient){
        int number = 0;
        String lastRef = null;

        List<RoomBooking> listRoomBook = roomBookingRepository.getListBookRoomByIdClient(idClient);

        for(RoomBooking rb : listRoomBook){
            if(rb.getRefRoomBook().equals(lastRef) == false){
                lastRef = rb.getRefRoomBook();
                number += 1;
            }
        }

        return number;
    }
}
