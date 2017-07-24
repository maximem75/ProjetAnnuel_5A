package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import server.model.Client;

import java.util.List;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
    @Query("select c from Client c where email = :Email and password = :Password")
    List<Client> login(@Param("Email") String email, @Param("Password") String password);

    @Query("select c from Client c where email = :Email and code = :Code")
    List<Client> confirmation(@Param("Email") String email, @Param("Code") String code);

    List<Client> findByToken(@Param("Token") String token);

    List<Client> findAll();

    boolean findOneByToken(@Param("Token") String token);

    Client findClientByEmailAndPassword(String email, String password);

    Client findClientById(long idClient );

    Client findClientByEmailEquals(String email);

    Client findDistinctFirstByToken(String token);

    Client findClientByAccreditationEquals(String accreditation);

    Client findClientByTokenEquals(String tokenClient);

    Client save(Client client);
}
