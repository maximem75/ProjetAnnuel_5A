package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.Article;
import server.service.ArticleService;
import java.util.List;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;


@RestController
@RequestMapping("/api/article")
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @RequestMapping( path = "/all", method = GET)
    @ResponseStatus(value = OK)
    public List<Article> getAllArticles(){
        List<Article> allArticles = articleService.getAllArticles();
        return allArticles;
    }

    @RequestMapping( value = "/{id}", method = GET)
    @ResponseStatus(value = OK)
    public Article getArticleById(@PathVariable int id){
        return articleService.getArticleById(id);
    }

    @RequestMapping(method = POST)
    @ResponseStatus(HttpStatus.OK)
    public void addArticle(@RequestBody Article article){
        articleService.addArticle(article);
    }

    @RequestMapping( value = "/delete/{id}", method = DELETE)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public void deleteArticle(int id){
        articleService.deleteArticle(id);
    }


}
