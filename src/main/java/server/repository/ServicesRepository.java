package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import server.model.Services;
import java.util.List;

@Repository
public interface ServicesRepository extends JpaRepository<Services, Long>{

    Services findById(int id);

    @Query("select s from Services s")
    List<Services> getListServices();

    List<Services> findByName(String name);

    List<Services> findByQuantity(int quantity);

    List<Services> findByPrice(double price);

}