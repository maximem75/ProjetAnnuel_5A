package server.repository;

        import org.springframework.data.jpa.repository.JpaRepository;
        import org.springframework.stereotype.Repository;
        import server.model.Newsletter;

@Repository
public interface NewsLetterRepository extends JpaRepository<Newsletter, Long>{

    Newsletter findById(int id);
}