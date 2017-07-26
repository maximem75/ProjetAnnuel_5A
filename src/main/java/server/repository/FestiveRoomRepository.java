package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import server.model.FestiveRoom;
import java.util.List;

@Component
public interface FestiveRoomRepository extends JpaRepository<FestiveRoom, Long>{

}