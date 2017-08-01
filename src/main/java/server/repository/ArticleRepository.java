package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import server.model.Article;

@Component
public interface ArticleRepository extends JpaRepository<Article, Long>{

    Article findById(int id);
}