package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import server.model.Article;
import server.repository.ArticleRepository;
import server.service.ClientService;
import server.utils.File.FileManager;

import java.util.Date;
import java.util.List;

import static org.springframework.http.HttpStatus.*;
import static org.springframework.web.bind.annotation.RequestMethod.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/article")
public class ArticleController {

    private String PRE_PATH = "/src/main/resources/static/img/Article/";
    private String PRE_PATH_FRONT = "img/Article/";

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
    public Article getArticleById(@RequestParam("idArticle") Long id){
        return articleRepository.getOne(id);
    }

    @RequestMapping(method = POST)
    @ResponseStatus(CREATED)
    public void addArticle(@RequestBody Article article, @RequestParam("file") MultipartFile file, @RequestParam("token") String token){
        if (clientService.adminAccess(token)){
            String pathServer = PRE_PATH + file.getOriginalFilename();

            FileManager fm = new FileManager();
            fm.saveImage(file, pathServer);

            article.setDate(new Date());
            article.setPicturePath(PRE_PATH_FRONT + file.getOriginalFilename());
            articleRepository.save(article);
        }
    }

    @RequestMapping(method = PUT)
    @ResponseStatus(ACCEPTED)
    public void updateArticle(@RequestBody Article article, @RequestParam("file") MultipartFile file, @RequestParam("token") String token){
        if (clientService.adminAccess(token)){
            String pathServer = PRE_PATH + file.getOriginalFilename();

            FileManager fm = new FileManager();
            fm.saveImage(file, pathServer);

            article.setDate(new Date());
            article.setPicturePath(PRE_PATH_FRONT + file.getOriginalFilename());
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
