package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.model.Newsletter;
import server.repository.NewsletterRepository;

import java.util.List;

@Service
public class NewsletterService {

    @Autowired
    private NewsletterRepository newsletterRepository;

    public List<Newsletter> getAllNewsletters() {
        return newsletterRepository.findAll();
    }

    public Newsletter getNewsletterById(int id) {
        return newsletterRepository.findById(id);
    }

    public void addNewsletter(Newsletter n) {
        newsletterRepository.save(n);
    }

    public String deleteNewsletter(int id){
        try{
            Newsletter f = newsletterRepository.findById(id);
            newsletterRepository.delete(f);
        }catch (Exception ex){
            return "Error deleting newsletter : "+ex.toString();
        }
        return " Newsletter successfully deleted";
    }
}
