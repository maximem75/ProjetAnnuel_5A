package server.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.Set;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "building")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Building {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_building")
    private int id;

    @Column(name = "building_name")
    @NotEmpty(message = "A building must have a name")
    private String buildingName;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBuildingName() {
        return buildingName;
    }

    public void setBuildingName(String buildingName) {
        this.buildingName = buildingName;
    }
}