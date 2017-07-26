package server.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jdk.nashorn.internal.objects.annotations.*;
import lombok.*;
import lombok.Getter;
import lombok.Setter;
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
@Table(name = "restaurant_table")
@JsonIgnoreProperties(ignoreUnknown = true)
public class RestaurantTable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_restaurant_table")
    private int id;

    @Column(name = "number")
    @NotEmpty(message = "A table must have a number")
    private String number;

    @Column(name = "number_chairs")
    @NotEmpty(message = "A table must have a number of chair")
    private String numberChairs;

}