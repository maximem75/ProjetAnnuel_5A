package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.model.Client;
import server.model.RoomBooking;
import server.model.RoomCategory;
import server.repository.RoomCategoryRepository;
import server.utils.Mail.MailManager;
import server.utils.Template.TemplateGenerator;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

@Service
public class TemplateService {
    @Autowired
    private RoomBookingService roomBookingService;

    @Autowired
    private RoomCategoryRepository roomCategoryRepository;

    private ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);

    public void GenerateTemplate(Client client, String refRom) {

        List<RoomBooking> myLis = roomBookingService.getListRoomBookingByRefBookRoom(refRom);
        List<RoomCategory> listCateg = new ArrayList<>();
        for (RoomBooking r : myLis) {
            listCateg.add(roomCategoryRepository.findOne(r.getIdRoomCategory()));
        }

        TemplateGenerator templateGenerator = new TemplateGenerator();
        String invoice;

        if (Objects.equals(myLis.get(0).getReason(), "Professionnel")) {
            invoice = templateGenerator.getProfessionnalInvoiceForMail(refRom, getCurrentDate(), getClientFullname(client),
                    client.getAddress(), client.getCity(), client.getCountry(), listCateg);
        } else {
            invoice = templateGenerator.getInvoiceHobbyForMail(refRom, getCurrentDate(), getClientFullname(client),
                    client.getAddress(), client.getCity(), client.getCountry(), listCateg);
        }

        MailManager mailManager = new MailManager();
        mailManager.sendEmailToClient("Votre facture RHM ", client.getEmail(), invoice);
        sendReminderMailToClient(myLis.get(0).getDateEnd(), client.getEmail());
    }

    public void sendFacturation(Client client, String refRom) {
        String mail = "residencedeshautsdemenaye@gmail.com";
        List<RoomBooking> myLis = roomBookingService.getListRoomBookingByRefBookRoom(refRom);
        List<RoomCategory> listCateg = new ArrayList<>();
        for (RoomBooking r : myLis) {
            listCateg.add(roomCategoryRepository.findOne(r.getIdRoomCategory()));
        }

        TemplateGenerator templateGenerator = new TemplateGenerator();
        String invoice;

        invoice = templateGenerator.getFacturation(refRom, getCurrentDate(), getClientFullname(client),
                client.getAddress(), client.getCity(), client.getCountry(), listCateg);

        MailManager mailManager = new MailManager();
        mailManager.sendEmailToClient("Votre facture RHM ", mail, invoice);
        sendReminderMailToClient(myLis.get(0).getDateEnd(), mail);
    }

    private String getClientFullname(Client client) {
        return client.getFirstName() + " " + client.getLastName();
    }

    private String getCurrentDate() {
        String patterndate = "dd/MM/yyyy";
        String date = new SimpleDateFormat(patterndate).format(new Date());

        return date;
    }

    private void getDataFromDatabase(Date lastBookingDate, String email) {
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        try {
            Date d1 = (lastBookingDate);
            Date d2 = sdf.parse(getCurrentDate());
            int count = 60;
            Boolean send = false;
            if (daysBetween(d2, d1) < 0) {
                if (daysBetween(d1, d2) >= count && !send) {
                    send = true;
                    MailManager mailManager = new MailManager();
                    mailManager.sendReminderMailToClient(email);
                }
            }
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    public int daysBetween(Date d1, Date d2) {
        return (int) ((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
    }

    private void sendReminderMailToClient(Date end, String email) {
        this.scheduler = Executors.newScheduledThreadPool(1);
        ScheduledFuture<?> taskHandle = scheduler.scheduleAtFixedRate(
                new Runnable() {
                    public void run() {
                        try {
                            getDataFromDatabase(end, email);
                        } catch (Exception ex) {
                            ex.printStackTrace(); //or loggger would be better
                        }
                    }
                }, 0, 1, TimeUnit.DAYS);

    }

}
