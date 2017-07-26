package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.model.Room;
import server.repository.RoomRepository;

import java.util.List;

@Service
public class RoomService {

    @Autowired
    private RoomRepository roomRepository;

    public void addRoom(Room room){
        System.out.println(room.getIdBuilding());

        roomRepository.save(room);
    }

    public void updateRoom(Room room){
        roomRepository.save(room);
    }

    public void deleteRoom(int id){
        roomRepository.deleteRoom(id);
    }

    public List<Room> getListRooms(){
        return roomRepository.findAll();
    }
}
