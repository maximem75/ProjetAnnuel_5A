package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.model.RoomCategory;
import server.repository.RoomCategoryRepository;

import java.util.List;

@Service
public class RoomCategoryService {

    @Autowired
    private RoomCategoryRepository roomCategoryRepository;

    public List<RoomCategory> getListRoomCategories(){
        return roomCategoryRepository.getListRoomCategories();
    }

    public void addRoomCategory(RoomCategory roomCategory){
        roomCategoryRepository.save(roomCategory);
    }

    public void updateRoomCategory(RoomCategory roomCategory){
        roomCategoryRepository.save(roomCategory);
    }

    public void deleteRoomCategory(int id){
        roomCategoryRepository.deleteRoomCategory(id);
    }
}
