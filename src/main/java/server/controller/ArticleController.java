package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.Article;
import server.repository.ArticleRepository;
import server.service.ClientService;
import server.utils.FilePathGenerator;

import java.util.Date;
import java.util.List;

import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.FOUND;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.web.bind.annotation.RequestMethod.*;


@RestController
@RequestMapping("/api/article")
public class ArticleController {
    private String PRE_PATH = "\\src\\main\\resources\\static\\img\\Article";

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private ClientService clientService;

    @RequestMapping( path = "/all", method = GET)
    @ResponseStatus(FOUND)
    public List<Article> getAllArticles(){
        return articleRepository.findAll();
    }

    @RequestMapping(method = GET)
    @ResponseStatus(FOUND)
    public Article getArticleById(@PathVariable Long id){
        return articleRepository.getOne(id);
    }

    @RequestMapping(method = POST)
    @ResponseStatus(CREATED)
    public void addArticle(@RequestBody Article article, @RequestParam("token") String token){
        if (clientService.adminAccess(token)){
            article.setDate(new Date());
            article.setPicturePath(FilePathGenerator.generatePath(article.getPicturePath(), PRE_PATH));
            articleRepository.save(article);
        }
    }

    @RequestMapping(method = PUT)
    @ResponseStatus(ACCEPTED)
    public void updateArticle(@RequestBody Article article, @RequestParam("token") String token){
        if (clientService.adminAccess(token)){
            article.setDate(new Date());
            article.setPicturePath(FilePathGenerator.generatePath(article.getPicturePath(), PRE_PATH));
            articleRepository.save(article);
        }
    }

    @RequestMapping(method = DELETE)
    @ResponseStatus(OK)
    @ResponseBody
    public void deleteArticle(@RequestParam("id") Long id, @RequestParam("token") String token){
        if (clientService.adminAccess(token)){
            articleRepository.delete(id);
        }
    }

}
