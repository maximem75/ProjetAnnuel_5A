package server.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import server.model.RoomBooking;

import java.util.List;

@Repository
public interface RoomBookingRepository extends JpaRepository<RoomBooking, Long> {

    @Query("select rb from RoomBooking rb where idRoom = :IdRoom")
    List<RoomBooking> getListRoomBookingById(@Param("IdRoom") int IdRoom);
}
