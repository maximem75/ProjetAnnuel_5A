package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import server.model.Service;

import java.util.List;

@Component
public interface ServiceRepository extends JpaRepository<Service, Long>{

    Service findById(int id);

    List<Service> findByName(String name);

    List<Service> findByQuantity(int quantity);

    List<Service> findByPrice(double price);

}