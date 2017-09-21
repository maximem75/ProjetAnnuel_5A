package server.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;

/**
 * Created by maxime on 05/09/2017.
 */
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "festiveRoomBookingServices")
@JsonIgnoreProperties(ignoreUnknown = true)
public class FestiveRoomBookingServices {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_festive_room_booking_services")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_festive_room_booking")
    private FestiveRoomBooking festiveRoomBooking;

    @ManyToOne
    @JoinColumn(name = "id_festive_room_service")
    private FestiveRoomService festiveRoomService;

    @Column(name = "quantity")
    private int quantity;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public FestiveRoomBooking getFestiveRoomBooking() {
        return festiveRoomBooking;
    }

    public void setFestiveRoomBooking(FestiveRoomBooking festiveRoomBooking) {
        this.festiveRoomBooking = festiveRoomBooking;
    }

    public FestiveRoomService getFestiveRoomService() {
        return festiveRoomService;
    }

    public void setFestiveRoomService(FestiveRoomService festiveRoomService) {
        this.festiveRoomService = festiveRoomService;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
