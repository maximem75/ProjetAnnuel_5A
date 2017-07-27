package server.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.hibernate.validator.constraints.NotEmpty;
import javax.persistence.*;
import javax.persistence.Table;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "service")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Services {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_service")
    @NotEmpty(message = "A service must have a name")
    private int id;

    @Column(name = "name")
    @NotEmpty(message = "A service must have a name")
    private String name;

    @Column(name = "quantity")
    @NotEmpty(message = "A service must have a quantity")
    private int quantity;

    @Column(name = "price")
    @NotEmpty(message = "A service must have a price")
    private double price;

}
