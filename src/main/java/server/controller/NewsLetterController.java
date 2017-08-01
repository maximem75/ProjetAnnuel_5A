package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.NewsLetter;
import server.service.NewsLetterService;
import java.util.List;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;


@RestController
@RequestMapping("/api/newsletter")
public class NewsLetterController {

    @Autowired
    private NewsLetterService newsletterService;

    @RequestMapping( path = "/all", method = GET)
    @ResponseStatus(value = OK)
    public List<NewsLetter> getAllNewsletters(){
        List<NewsLetter> allNewsletters = newsletterService.getAllNewsletters();
        return allNewsletters;
    }

    @RequestMapping(method = POST)
    @ResponseStatus(HttpStatus.OK)
    public void addNewsletter(@RequestBody NewsLetter article){
        newsletterService.addNewsletter(article);
    }

    @RequestMapping( value = "/delete/{id}", method = DELETE)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public void deleteArticle(int id){
        newsletterService.deleteNewsletter(id);
    }


}
