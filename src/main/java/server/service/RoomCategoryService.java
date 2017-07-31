package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.model.RoomBooking;
import server.model.RoomCategory;
import server.repository.RoomCategoryRepository;

import java.util.*;

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

    public HashMap<Integer, Integer> getHashMapCategoryFromListRoomBook(List<RoomBooking> listRoomBooking) {
        HashMap<Integer, Integer> hmRoomCategory = new HashMap<Integer, Integer>();

        for (RoomBooking rb : listRoomBooking) {
            RoomCategory roomCategory = roomCategoryRepository.findById(rb.getIdRoomCategory());

            if (hmRoomCategory.get(roomCategory.getId()) == null && roomCategory != null) {
                hmRoomCategory.put(roomCategory.getId(), 1);
            } else if (hmRoomCategory.get(roomCategory.getId()) != null && roomCategory != null) {
                hmRoomCategory.put(roomCategory.getId(), hmRoomCategory.get(roomCategory.getId()) + 1);
            }
        }

//        Iterator it = hmRoomCategory.entrySet().iterator();
//        while (it.hasNext()) {
//            Map.Entry pair = (Map.Entry) it.next();
//            System.out.println(pair.getKey() + " = " + pair.getValue());
//
//            it.remove();
//        }

        return hmRoomCategory;
    }
}
