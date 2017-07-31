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
@Table(name = "festiveroom_booking")
@JsonIgnoreProperties(ignoreUnknown = true)
public class FestiveRoomBooking {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_festiveroom_booking")
    private int id;
    @Column(name = "booking_date")
    private Date bookingDate;
    @Column(name = "date")
    private Date eventDate;
    @Column(name = "number_chairs")
    private int numberChairs;
    @Column(name = "id_client")
    private int idClient;
    @Column(name = "id_table")
    private int idFestiveRoom;

}
