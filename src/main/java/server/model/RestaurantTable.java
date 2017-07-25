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
@Table(name = "restaurantTable")
@JsonIgnoreProperties(ignoreUnknown = true)
public class RestaurantTable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_restaurant_table")
    private int id;

    @Column(name = "number")
    @NotEmpty(message = "A table must have a number of chair")
    private String number;

    @Column(name = "numberChairs")
    @NotEmpty(message = "A table must have a number of chair")
    private int numberChairs;

}