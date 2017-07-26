package server.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "festiveRoom")
@JsonIgnoreProperties(ignoreUnknown = true)
public class FestiveRoom {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_festive_room")
    private int idFestiveRoom;

    @Column(name = "event")
    @NotEmpty(message = "A service must have a name")
    private String event;

    @Column(name = "chairsNumber")
    @NotEmpty(message = "A service must have a name")
    private int chairsNumber;


    @Column(name = "numberTables")
    @NotEmpty(message = "A service must have a name")
    private int numberTables;

    @Override
    public String toString() {
        return "FestiveRoom{" +
                "idFestiveRoom=" + idFestiveRoom +
                ", event='" + event + '\'' +
                ", chairsNumber=" + chairsNumber +
                ", numberTables=" + numberTables +
                '}';
    }
}