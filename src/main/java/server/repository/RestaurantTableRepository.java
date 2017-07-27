package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import server.model.RestaurantTable;

import java.util.List;

@Component
public interface RestaurantTableRepository extends JpaRepository<RestaurantTable, Long>{


    RestaurantTable findById(int number);

    RestaurantTable findByNumber(String number);

    List<RestaurantTable> findByNumberChairs(int numberChairs);
}