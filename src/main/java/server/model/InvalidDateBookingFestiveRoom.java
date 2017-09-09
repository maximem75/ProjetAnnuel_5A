package server.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by maxime on 06/09/2017.
 */

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "invalidBookingDateFestiveRoom")
@JsonIgnoreProperties(ignoreUnknown = true)
public class InvalidDateBookingFestiveRoom {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_invalid_date_booking")
    private int id;

    @Column(name = "date_start")
    private Date dateStart;

    @Column(name = "date_end")
    private Date dateEnd;

    @ManyToOne
    @JoinColumn(name = "id_festive_room")
    private FestiveRoom festiveRoom;

}
