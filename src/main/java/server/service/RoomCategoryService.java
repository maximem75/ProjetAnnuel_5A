package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.model.RoomBooking;
import server.model.RoomCategory;
import server.repository.RoomCategoryRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class RoomCategoryService {

    @Autowired
    private RoomCategoryRepository roomCategoryRepository;

    public List<RoomCategory> getListRoomCategories() {
        return roomCategoryRepository.getListRoomCategories();
    }

    public void addRoomCategory(RoomCategory roomCategory) {
        roomCategoryRepository.save(roomCategory);
    }

    public void updateRoomCategory(RoomCategory roomCategory) {
        roomCategoryRepository.save(roomCategory);
    }

    public void deleteRoomCategory(int id) {
        roomCategoryRepository.deleteRoomCategory(id);
    }

    public List<RoomCategory> getListCategoryFromListRoomBook(List<RoomBooking> listRoomBooking) {
        List<RoomCategory> listRoomCategory = new ArrayList<>();
        for (RoomBooking rb : listRoomBooking) {
            RoomCategory roomCategory = roomCategoryRepository.findById(rb.getIdRoomCategory());

            if (listRoomCategory.contains(roomCategory) == false && roomCategory != null) {
                listRoomCategory.add(roomCategory);
            }
        }

        return listRoomCategory;
    }
}
