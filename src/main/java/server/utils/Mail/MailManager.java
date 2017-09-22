package server.utils.Mail;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;
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

    public void sendEmailToClient(String clientEmail){
        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress("alvin.ondzounga@gmail.com"));
            message.setRecipients(Message.RecipientType.TO,
                    InternetAddress.parse(clientEmail));
            message.setSubject("Confirmation de réservation RHM");
            //String email = convertHtmlFileIntoString("C:\\Users\\stanley\\Downloads\\Spring-Email-Gmail-Smtp-Example\\ModulesIntelligents\\src\\invoiceHobby.html");
            String email = "test";
            System.out.println("On a "+email);
            message.setContent(email,"text/html");
            Transport.send(message);
            System.out.println("Done");
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }

}
