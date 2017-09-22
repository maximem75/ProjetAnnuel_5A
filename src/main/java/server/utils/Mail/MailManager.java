package server.utils.Mail;

import javax.mail.Session;
import java.util.*;
/**
 * Created by maxime on 22/09/2017.
 */
public class MailManager {

    private Session session;

    public MailManager(){
        String username = "alvin.ondzounga@gmail.com";
        String password = "vdmvdmvdm";

        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");
        props.put("mail.smtp.ssl.trust", "smtp.gmail.com");

        session = Session.getInstance(props,
                new javax.mail.Authenticator() {
                    protected javax.mail.PasswordAuthentication getPasswordAuthentication() {
                        return new javax.mail.PasswordAuthentication(username, password);
                    }
                });
    }

}
