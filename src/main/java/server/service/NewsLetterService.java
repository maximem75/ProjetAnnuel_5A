package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.model.NewsLetter;
import server.repository.NewsLetterRepository;

import java.util.List;

@Service
public class NewsLetterService {

    @Autowired
    private NewsLetterRepository newsletterRepository;

    public List<NewsLetter> getAllNewsletters() {
        return newsletterRepository.findAll();
    }

    public NewsLetter getNewsletterById(int id) {
        return newsletterRepository.findById(id);
    }

    public void addNewsletter(NewsLetter n) {
        newsletterRepository.save(n);
    }

    public String deleteNewsletter(int id){
        try{
            NewsLetter f = newsletterRepository.findById(id);
            newsletterRepository.delete(f);
        }catch (Exception ex){
            return "Error deleting newsletter : "+ex.toString();
        }
        return " NewsLetter successfully deleted";
    }
}
