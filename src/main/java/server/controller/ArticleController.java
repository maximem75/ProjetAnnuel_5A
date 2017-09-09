package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.Article;
import server.service.ArticleService;
import server.service.ClientService;

import java.util.List;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.web.bind.annotation.RequestMethod.*;


@RestController
@RequestMapping("/api/article")
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @Autowired
    private ClientService clientService;

    @RequestMapping( path = "/all", method = GET)
    @ResponseStatus(value = OK)
    public List<Article> getAllArticles(){
        List<Article> listArticles = articleService.getAllArticles();
        return listArticles;
    }

    @RequestMapping(method = GET)
    @ResponseStatus(value = OK)
    public Article getArticleById(@PathVariable int id){
        return articleService.getArticleById(id);
    }

    @RequestMapping(method = POST)
    @ResponseStatus(HttpStatus.OK)
    public void addArticle(@RequestBody Article article, @RequestParam("token") String token){
        if (clientService.adminAccess(token)){
            articleService.addArticle(article);
        }
    }

    @RequestMapping(method = PUT)
    @ResponseStatus(HttpStatus.OK)
    public void updateArticle(@RequestBody Article article, @RequestParam("token") String token){
        if (clientService.adminAccess(token)){
            articleService.updateArticle(article);
        }
    }

    @RequestMapping(method = DELETE)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public void deleteArticle(@RequestParam("id") int id, @RequestParam("token") String token){
        if (clientService.adminAccess(token)){
            articleService.deleteArticle(id);
        }
    }

}
