package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.model.RoomBooking;
import server.repository.RoomRepository;
import server.utils.Mail.MailManager;
import server.utils.Template.TemplateGenerator;
import java.util.ArrayList;
import java.util.List;

@Service
public class TemplateService {
    @Autowired
    private ClientService clientService;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private RoomBookingService roomBookingService;

    public void GenerateTemplate(String refRom){

        List<RoomBooking> myLis = roomBookingService.getListRoomBookingByRefBookRoom(refRom);

        System.out.println("VALIDATION");
/*

        TemplateGenerator templateGenerator = new TemplateGenerator();
        String Invoice = templateGenerator.getProfessionnalInvoiceForMail(refBookRoom,"today",client.getFirstName()+" "+client.getFirstName(),
                client.getAddress(),client.getCountry(),client.getCity(),templateGenerator.getOccurrenceRoomBooking((long)1,listRoomBooking),
                templateGenerator.getOccurrenceRoomBooking((long)2,listRoomBooking),templateGenerator.getOccurrenceRoomBooking((long)3,listRoomBooking),templateGenerator.getOccurrenceRoomBooking((long) 4,listRoomBooking),0,0,0,0,0);

        MailManager mailManager = new MailManager();
        mailManager.sendEmailToClient("Your invoice","ondzoungabruce@hotmail.fr",Invoice);
        System.out.println("On envoie la facture par mail");*/

    }
}
