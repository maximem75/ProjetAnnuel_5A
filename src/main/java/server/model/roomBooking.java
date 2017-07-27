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
@Table(name = "room_booking")
@JsonIgnoreProperties(ignoreUnknown = true)
public class RoomBooking {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_room_booking")
    private int id;

    @Column(name = "date_start")
    private Date dateStart;

    @Column(name = "date_end")
    private Date dateEnd;

    @Column(name = "date_book")
    private Date dateBook;

    @Column(name = "id_client")
    private int idClient;

    @Column(name = "id_room")
    private int idRoom;

    @Column(name = "reason")
    private String reason;

    @Column(name = "status")
    private String status;
}
