package server.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.Set;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "room")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_room")
    private int id;

    @Column(name = "number")
    @NotEmpty(message = "A category must have a number")
    private String number;

    @ManyToOne
    @JoinColumn(name="id_room_category")
    private RoomCategory roomCategory;

    @ManyToOne
    @JoinColumn(name="id_building")
    private Building building;

    @OneToMany(mappedBy = "room", cascade = CascadeType.ALL)
    private Set<InvalidBookingDateRoom> invalidBookingDateRooms;
}
