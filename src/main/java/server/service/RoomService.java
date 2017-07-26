package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.model.Room;
import server.model.RoomCategory;
import server.repository.BuildingRepository;
import server.repository.RoomCategoryRepository;
import server.repository.RoomRepository;

import java.util.List;

@Service
public class RoomService {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private BuildingRepository buildingRepository;

    @Autowired
    private RoomCategoryRepository roomCategoryRepository;

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

    public void deleteListRoomByCategory(int idRoomCategory) {
        roomRepository.deleteListRoomByCategory(idRoomCategory);
    }

    public void deleteListRoomByBuilding(int idBuilding) {
        roomRepository.deleteListRoomByBuilding(idBuilding);
    }
}
