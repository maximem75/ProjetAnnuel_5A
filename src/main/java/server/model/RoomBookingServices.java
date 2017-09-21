package server.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;

/**
 * Created by maxime on 06/09/2017.
 */

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "roomBookingServices")
@JsonIgnoreProperties(ignoreUnknown = true)
public class RoomBookingServices {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_room_booking_services")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_room_booking")
    private RoomBooking roomBooking;

    @ManyToOne
    @JoinColumn(name = "id_room_service")
    private RoomService roomService;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public RoomBooking getRoomBooking() {
        return roomBooking;
    }

    public void setRoomBooking(RoomBooking roomBooking) {
        this.roomBooking = roomBooking;
    }

    public RoomService getRoomService() {
        return roomService;
    }

    public void setRoomService(RoomService roomService) {
        this.roomService = roomService;
    }
}
