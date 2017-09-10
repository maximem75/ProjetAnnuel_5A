package server.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "restaurantTableBooking")
@JsonIgnoreProperties(ignoreUnknown = true)
public class RestaurantTableBooking {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_restaurant_booking")
    private Long id;

    @Column(name = "booking_date")
    private Date bookingDate;

    @Column(name = "date")
    private Date restaurantDate;

    @Column(name = "number_chairs")
    private Long numberChairs;

    @Column(name = "id_client")
    private Long idClient;

    @Column(name = "id_restaurant_table")
    private Long idRestaurantTable;

}
