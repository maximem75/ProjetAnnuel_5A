package server.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;

/**
 * Created by maxime on 20/09/2017.
 */
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "pictureRoomCategory")
@JsonIgnoreProperties(ignoreUnknown = true)
public class PictureRoomCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_picture_room_category")
    private Long id;

    @ManyToOne
    @JoinColumn(name="id_room_category")
    private RoomCategory roomCategory;

    @Column(name = "path")
    private String path;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public RoomCategory getRoomCategory() {
        return roomCategory;
    }

    public void setRoomCategory(RoomCategory roomCategory) {
        this.roomCategory = roomCategory;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }
}
