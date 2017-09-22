package server.utils.mail;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

/**
 * Created by Alvin on 01/09/2017.
 */
public class MailManager {

    private final String username = "alvin.ondzounga@gmail.com";
    private final String password = "vdmvdmvdm";

    private Properties props;
    private Session session;

    public MailManager() {
        props = new Properties();
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

    public void sendEmailToClient(String clientEmail) {
        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress("alvin.ondzounga@gmail.com"));
            message.setRecipients(Message.RecipientType.TO,
                    InternetAddress.parse(clientEmail));
            message.setSubject("Confirmation de réservation RHM");
            //String email = convertHtmlFileIntoString("C:\\Users\\stanley\\Downloads\\Spring-Email-Gmail-Smtp-Example\\ModulesIntelligents\\src\\invoiceHobby.html");
            String email = "test";
            System.out.println("On a " + email);
            message.setContent(email, "text/html");
            Transport.send(message);
            System.out.println("Done");
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }

    public String convertHtmlFileIntoString(String pathFile) {
        StringBuilder contentBuilder = new StringBuilder();
        try {
            BufferedReader in = new BufferedReader(new FileReader(pathFile));
            String str;
            while ((str = in.readLine()) != null) {
                contentBuilder.append(str);
            }
            in.close();
        } catch (IOException e) {
        }
        String content = contentBuilder.toString();
        return content;
    }

    public static void main(String[] args) {
        MailManager mailManager = new MailManager();
        mailManager.sendEmailToClient("mollard.maxime@hotmail.fr");
    }
}
