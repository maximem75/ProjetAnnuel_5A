package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import server.model.Building;
import server.model.Room;

import java.util.List;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
    @Query("select r from Room r")
    List<Room> getListRoom();

    @Transactional
    @Modifying
    @Query("delete from Room r where id = :IdRoom")
    void deleteRoom(@Param("IdRoom") int id);

    @Transactional
    @Modifying
    @Query("delete from Room r where idRoomCategory = :IdRoomCategory")
    void deleteListRoomByCategory(@Param("IdRoomCategory")int idRoomCategory);

    @Transactional
    @Modifying
    @Query("delete from Room r where idBuilding = :IdBuilding")
    void deleteListRoomByBuilding(@Param("IdBuilding")int idBuilding);

}