package server.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;

/**
 * Created by maxime on 20/09/2017.
 */
@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "pictureGalery")
@JsonIgnoreProperties(ignoreUnknown = true)
public class PictureGalery {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_picture_galery")
    private Long id;

    @Column(name = "path")
    private String path;
}
