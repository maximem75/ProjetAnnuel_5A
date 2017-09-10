package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.model.Building;
import server.model.Room;
import server.model.RoomBooking;
import server.repository.BuildingRepository;
import server.repository.RoomBookingRepository;
import server.repository.RoomCategoryRepository;
import server.repository.RoomRepository;
import server.utils.DateComparer;

import java.util.*;

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
        if (room.getBuilding() != null && room.getRoomCategory() != null)
            roomRepository.save(room);
    }

    public void updateRoom(Room room) {
        roomRepository.save(room);
    }

    public void deleteRoom(Long id) {
        roomRepository.deleteRoom(id);
    }

    public List<Room> getListRooms() {
        return roomRepository.getListRoom();
    }

    public List<Room> getListRoomFree(Date dateSart, Date dateEnd) {
        boolean valideRoom;

        List<Room> listRoom = roomRepository.getListRoom();
        List<Room> unvalideListRoom = new ArrayList<Room>();
        List<RoomBooking> listRoomBookingBdd = roomBookingRepository.getListRoomBookingByMinDate(dateSart);

        for (RoomBooking rb : listRoomBookingBdd) {
            Room r = roomRepository.findRoomById(rb.getIdRoom());
            if (!unvalideListRoom.contains(r)) {
                valideRoom = DateComparer.dateBookAvailable(dateSart, dateEnd, rb.getDateStart(), rb.getDateEnd(), rb.getStatus(), rb.getDateBook(), 1);

                if (!valideRoom) {
                    unvalideListRoom.add(r);
                }
            }
        }

        for(Room r : unvalideListRoom){
            if(listRoom.contains(r)){
                listRoom.remove(r);
            }
        }

        return listRoom;
    }

    public Long findIdBuilding(List<Room> listRoom, List<Building> listBuilding, HashMap<Long, Integer> hmRoomCategory) {
        int nbr;
        int nbrMax = 0;
        Long idBuild = -1L;
        HashMap<Long, Integer> currentHm;

        for (Building b : listBuilding) {
            nbr = 0;
            currentHm =  new HashMap<Long, Integer>(hmRoomCategory);

            for (Room r : listRoom) {
                HashMap<Long, Integer> tempHm = new HashMap<Long, Integer>(currentHm);
                Iterator it = tempHm.entrySet().iterator();

                while (it.hasNext()) {
                    Map.Entry pair = (Map.Entry) it.next();
                    Long pKey = (Long) pair.getKey();
                    int pValue = (int) pair.getValue();

                    if (r.getBuilding().getId() == b.getId() && r.getRoomCategory().getId() == pKey && pValue > 0) {
                        int value = (int) pair.getValue() - 1;
                        currentHm.put(pKey, value);

                        nbr += 1;
                    }

                    it.remove();
                }
            }

            if (nbr > nbrMax) {
                nbrMax = nbr;
                idBuild = b.getId();
            }
        }

        return idBuild;
    }

    public List<Room> findListRoomBooking(List<Room> listValideRoomBooking, HashMap<Long, Integer> hmRoomCategory, List<Room> listRoom, List<Building> listBuilding) {
        boolean total = true;
        boolean valide = true;
        List<Room> listEmpty = new ArrayList<Room>();

        Long idBuild = findIdBuilding(listRoom, listBuilding, hmRoomCategory);

        if(idBuild == -1){
            return listEmpty;
        }

        HashMap<Long, Integer> tmpHm = new HashMap<Long, Integer>(hmRoomCategory);
        Iterator it = tmpHm.entrySet().iterator();

        Building rmBuilding = buildingRepository.findById(idBuild);
        listBuilding.remove(rmBuilding);

        while (it.hasNext()) {
            Map.Entry pair = (Map.Entry) it.next();
            Long key = (Long) pair.getKey();

            for (Long i = 0L; i < hmRoomCategory.get(key); i++) {
                List<Room> tmpListRoom = new ArrayList<Room>(listRoom);
                for (Room r : tmpListRoom) {
                    if (Objects.equals(r.getRoomCategory().getId(), key) && Objects.equals(r.getBuilding().getId(), idBuild) && !listValideRoomBooking.contains(r) && hmRoomCategory.get(key) > 0L) {
                        listValideRoomBooking.add(r);
                        int v = hmRoomCategory.get(key) - 1;
                        hmRoomCategory.put(key, v);
                        listRoom.remove(r);
                    }
                }
            }

            if (hmRoomCategory.get(key) > 0)
                total = false;

            it.remove();
        }

        if (!total && listBuilding.size() > 0) {
            findListRoomBooking(listValideRoomBooking, hmRoomCategory, listRoom, listBuilding);
        } else if(!total && listBuilding.size() == 0){
            valide = false;
        }

        if(valide)
            return listValideRoomBooking;
        else
            return listEmpty;
    }

}
