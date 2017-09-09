package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import server.model.InvalidBookingDateRoom;

/**
 * Created by maxime on 09/09/2017.
 */
@Repository
public interface InvalidBookingDateRoomRepository extends JpaRepository<InvalidBookingDateRoom, Long> {
}
