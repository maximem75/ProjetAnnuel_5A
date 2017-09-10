package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import server.model.Article;
import server.model.FestiveRoom;
import server.repository.ArticleRepository;
import server.repository.FestiveRoomRepository;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@Service
public class ArticleService {

    @Autowired
    private ArticleRepository articleRepository;

    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }

    public Article getArticleById(Long id) {
        return articleRepository.findById(id);
    }

    public void addArticle(Article article) {
        articleRepository.save(article);
    }

    public void updateArticle(Article article) {
        articleRepository.save(article);
    }

    public String deleteArticle(Long id){
        try{
            Article f = articleRepository.findById(id);
            articleRepository.delete(f);
        }catch (Exception ex){
            return "Error deleting article : "+ex.toString();
        }
        return " article successfully deleted";
    }

/*
    public void updateRoom(Room room) {
        roomRepository.save(room);
    }
    */

}
