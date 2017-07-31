package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.model.Room;
import server.model.RoomBooking;
import server.model.RoomCategory;
import server.repository.BuildingRepository;
import server.repository.RoomBookingRepository;
import server.repository.RoomCategoryRepository;
import server.repository.RoomRepository;
import server.utils.DateComparer;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class RoomService {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private BuildingRepository buildingRepository;

    @Autowired
    private RoomCategoryRepository roomCategoryRepository;

    @Autowired
    private RoomBookingRepository roomBookingRepository;

    public void addRoom(Room room) {
        if(buildingRepository.findById(room.getIdBuilding()) != null && roomCategoryRepository.findById(room.getIdRoomCategory()) != null)
            roomRepository.save(room);
    }

    public void updateRoom(Room room) {
        roomRepository.save(room);
    }

    public void deleteRoom(int id) {
        roomRepository.deleteRoom(id);
    }

    public List<Room> getListRooms() {
        return roomRepository.findAll();
    }

    public void deleteListRoomByCategory(int idRoomCategory) { roomRepository.deleteListRoomByCategory(idRoomCategory); }

    public void deleteListRoomByBuilding(int idBuilding) {
        roomRepository.deleteListRoomByBuilding(idBuilding);
    }

    public List<Room> getListRoomFree(Date dateSart, Date dateEnd){
        boolean valideRoom;
        List<Room> listRoomBdd = roomRepository.getListRoom();
        List<Room> listRoom = new ArrayList<Room>();
        List<RoomBooking> listRoomBookingBdd = roomBookingRepository.getListRoomBookingByMinDate(dateSart);

        for(RoomBooking rb : listRoomBookingBdd){
            for(Room r : listRoomBdd){
                if(rb.getIdRoom() == r.getId()){
                    valideRoom = DateComparer.dateRoomBookingAvailable(dateSart, dateEnd, rb.getDateStart(), rb.getDateEnd());

                    if(valideRoom == true && listRoom.contains(r) == false)
                        listRoom.add(r);
                } else if(listRoom.contains(r) == false){
                    listRoom.add(r);
                }
            }
        }

        return listRoom;
    }
}
