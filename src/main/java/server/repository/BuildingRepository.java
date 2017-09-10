package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import server.model.Building;
import server.model.RoomCategory;

import java.util.List;

@Repository
public interface BuildingRepository extends JpaRepository<Building, Long> {

    @Query("select b from Building b")
    List<Building> getListBuildings();

    @Transactional
    @Modifying
    @Query("delete from Building rc where id = :IdBuilding")
    void deleteBuilding(@Param("IdBuilding") Long id);

    Building findById(Long id);

}
