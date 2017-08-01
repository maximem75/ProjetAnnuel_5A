package server.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import server.model.RoomBooking;

import java.util.Date;
import java.util.List;

@Repository
public interface RoomBookingRepository extends JpaRepository<RoomBooking, Long> {

    @Query("select rb from RoomBooking rb where idRoom = :IdRoom")
    List<RoomBooking> getListRoomBookingById(@Param("IdRoom") int IdRoom);

    @Query("select rb from RoomBooking rb where dateEnd > :MinDate or dateEnd = :MinDate")
    List<RoomBooking> getListRoomBookingByMinDate(@Param("MinDate") Date MinDate);

    @Query("select rb from RoomBooking rb")
    List<RoomBooking> getListRoomBooking();

    @Query("select rb from RoomBooking rb where refRoomBook = :RefRoomBook")
    List<RoomBooking> getListRoomBookingByRefBookRoom(@Param("RefRoomBook") String RefRoomBook);

    @Query("select rb from RoomBooking rb where idClient = :IdClient")
    List<RoomBooking> getListRoomBookingByIdClient(@Param("IdClient") int IdClient);
}
