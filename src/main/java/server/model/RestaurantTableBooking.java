package server.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "restaurant_table_booking")
@JsonIgnoreProperties(ignoreUnknown = true)
public class RestaurantTableBooking {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_restaurant_booking")
    private int id;
    @Column(name = "booking_date")
    private Date bookingDate;
    @Column(name = "date")
    private Date restaurantDate;
    @Column(name = "number_chairs")
    private int numberChairs;
    @Column(name = "id_client")
    private int idClient;
    @Column(name = "id_table")
    private int idTable;

}