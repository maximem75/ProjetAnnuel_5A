package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import server.model.FestiveRoom;
import java.util.List;

@Repository
public interface FestiveRoomRepository extends JpaRepository<FestiveRoom, Long>{

}