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
    private int idFestiveRoom;
    private String event;
    private int chairsNumber;
    private int numberTables;
    private int idClient;

    public int getIdFestiveRoom() {
        return idFestiveRoom;
    }

    public void setIdFestiveRoom(int id) {
        this.idFestiveRoom = id;
    }

    public String getEvent() {
        return event;
    }

    public void setEvent(String event) {
        this.event = event;
    }

    public int getChairsNumber() {
        return chairsNumber;
    }

    public void setChairsNumber(int numberChairs) {
        this.chairsNumber = numberChairs;
    }

    public int getNumberTables() {
        return numberTables;
    }

    public void setNumberTables(int numberTables) {
        this.numberTables = numberTables;
    }

    public int getIdClient() {
        return idClient;
    }

    public void setIdClient(int idClient) {
        this.idClient = idClient;
    }

    @Override
    public String toString() {
        return "FestiveRoom{" +
                "idFestiveRoom=" + idFestiveRoom +
                ", event='" + event + '\'' +
                ", numberChairs=" + chairsNumber +
                ", numberTables=" + numberTables +
                ", idClient=" + idClient +
                '}';
    }
}