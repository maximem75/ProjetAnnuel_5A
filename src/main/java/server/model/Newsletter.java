package server.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import javax.persistence.*;
import javax.persistence.Table;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "NewsLetter")
@JsonIgnoreProperties(ignoreUnknown = true)
public class NewsLetter {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_news_letter")
    private int id;
    @Column(name = "id_client")
    private long idClient;
    @Column(name = "send_news_letter")
    private boolean sendNewsLetter;
    @Column(name = "description")
    private String description;
    @Column(name = "reason")
    private String reason;
}