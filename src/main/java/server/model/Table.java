package server.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "table")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Table {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_table")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "chair")
    @NotEmpty(message = "A table must have a number of chair")
    private String firstName;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
}