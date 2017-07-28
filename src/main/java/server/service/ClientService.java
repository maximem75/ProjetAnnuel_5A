package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import server.model.Client;
import server.repository.ClientRepository;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;
    @Autowired
    private SecurityClientService securityClientService;

    public Client getById(int id) {
        return clientRepository.findClientById(id);
    }

    public Client addClient(Client client) {
        return clientRepository.save(client);
    }

    public Client updateClient(Client client) {
        return clientRepository.save(client);
    }

    public Client findByToken(String Token) {
        Client client = clientRepository.findByToken(Token);

        if (client != null) {
            boolean available = tokenAvailable(client);
            if (available == true) {
                return client;
            }
            return null;
        }
        return null;
    }

    public Client login(String email, String password) {
        List<Client> clients = clientRepository.login(email, password);

        if (clients.size() > 0) {
            clients.get(0).setToken(UUID.randomUUID().toString());
            clients.get(0).setTokenDate(new Date());
            return clients.get(0);
        } else {
            return null;
        }
    }

    public Client confirmation(String email, String code) {
        List<Client> clients = clientRepository.confirmation(email, code);

        if (clients.size() > 0) {
            return clients.get(0);
        } else {
            return null;
        }
    }

    public boolean tokenAvailable(Client client) {
        Date currentDate = new Date();

        long diff = Math.abs(currentDate.getTime() - client.getTokenDate().getTime());
        long diffMinutes = diff / 60000 % 60;
        long diffHours = diff / 3600000;

        if (diffHours <= 0 && diffMinutes < 15) {
            return true;
        } else {
            return false;
        }
    }

    public void updateTokenDate(Client client) {
        client.setTokenDate(new Date());
    }

    public Client updateNewInformationsClient(@RequestBody Client newClient, Client client, String psw) {
        if(client != null) {
            if(client.getPassword().equals(psw)){
                client.setPhone(newClient.getPhone());
                client.setCountry(newClient.getCountry());
                client.setCity(newClient.getCity());
                client.setAddress(newClient.getAddress());
                client.setPostalCode(newClient.getPostalCode());
                client.setPassword(securityClientService.hashPassword(newClient.getPassword()));

                updateTokenDate(client);
                updateClient(client);

                return client;
            } else {
                throw new IllegalArgumentException("error");
            }
        } else {
            throw new IllegalArgumentException("error");
        }
    }

    public boolean adminAccess(String token){
        Client client = findByToken(token);
        //TEST
        return true;
        //PROD
        /*if(client != null){
            if(client.getAccreditation().equals("admin"))
                return true;
            else
                return false;
        }

        return false;*/

    }
}
