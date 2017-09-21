package server.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "roomCategory")
@JsonIgnoreProperties(ignoreUnknown = true)
public class RoomCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_room_category")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private float price;

    @OneToMany(mappedBy = "roomCategory", cascade = CascadeType.ALL)
    private Set<PictureRoomCategory> listPictureRoomCategory;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public Set<PictureRoomCategory> getListPictureRoomCategory() {
        return listPictureRoomCategory;
    }

    public void setListPictureRoomCategory(Set<PictureRoomCategory> listPictureRoomCategory) {
        this.listPictureRoomCategory = listPictureRoomCategory;
    }
}
