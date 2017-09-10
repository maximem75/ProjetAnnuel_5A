package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.model.RoomBooking;
import server.repository.RoomBookingRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class RoomBookingService {
    @Autowired
    private RoomBookingRepository roomBookingRepository;

    public List<RoomBooking> getListRoomBookingByRefBookRoom(String refBookRoom){
        return roomBookingRepository.getListRoomBookingByRefBookRoom(refBookRoom);
    }

    public Long getNumberRefBook(Long idClient){
        Long number = 0L;
        String lastRef = "";
        List<String> refList = new ArrayList<>();

        List<RoomBooking> listRoomBook = roomBookingRepository.getListRoomBookingByIdClient(idClient);

        for(RoomBooking rb : listRoomBook){
            if(!rb.getRefRoomBook().equals(lastRef) && Objects.equals(rb.getIdClient(), idClient) && !refList.contains(rb.getRefRoomBook())){
                lastRef = rb.getRefRoomBook();
                refList.add(rb.getRefRoomBook());
                number += 1;
            }
        }

        return number;
    }
}
