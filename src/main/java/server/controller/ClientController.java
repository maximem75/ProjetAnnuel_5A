package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.Client;
import server.repository.ClientRepository;
import server.service.ClientService;
import server.service.SecurityClientService;

import java.util.Date;
import java.util.List;

import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

//@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/client")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private SecurityClientService securityClientService;

    @RequestMapping(path = "/login", method = GET)
    @ResponseStatus(value = OK)
    public Client login(@RequestParam("email") String email, @RequestParam("password") String password) {
        String pswd = securityClientService.hashPassword(password);
        Client client = clientService.login(email, pswd);

        if(client != null){
            clientService.updateClient(client);
            return client;
        } else {
            throw new IllegalArgumentException("error");
        }
    }


    @RequestMapping(path = "/logout", method = GET)
    @ResponseStatus(value = OK)
    public boolean logout(@RequestParam String token){
        Client client = clientService.findByToken(token);
        client.setToken(null);
        client.setTokenDate(null);
        clientService.updateClient(client);

        return true;
    }


    @RequestMapping(method = GET, value="/adminGetList")
    @ResponseStatus(OK)
    public List<Client> getLIstIsAdmin(@RequestParam(value = "token") String tokenClient) {
        if(clientService.adminAccess(tokenClient) == true){
            //return clientRepository.findAll();
            return null;
        }

        return null;
    }


    @RequestMapping(path = "/reloadToken", method = GET)
    @ResponseStatus(value = OK)
    public Date reloadToken(@RequestParam String token){
        Client client = clientService.findByToken(token);
        if(client != null){
            clientService.updateTokenDate(client);
            clientService.updateClient(client);

            return client.getTokenDate();
        } else {
            return null;
        }
    }

    @RequestMapping(path = "/getByToken", method = GET)
    @ResponseStatus(value = OK)
    public Client getClientByToken(@RequestParam String token){
        Client client = clientService.findByToken(token);

        if(client != null){
            return clientService.findByToken(token);
        }

        return null;
    }

    @RequestMapping(path = "/confirmation", method = GET)
    @ResponseStatus(value = OK)
    public Client confirmation(@RequestParam("email") String email, @RequestParam String code) {
        Client client = clientService.confirmation(email, code);

        if (client != null) {
            client.setCode("OK");
            clientService.updateClient(client);

            return client;
        } else {
            throw new IllegalArgumentException("error");
        }
    }

    /*@RequestMapping(value = "/recovery", method = GET)
    @ResponseStatus(OK)
    public void recoveryPasswordClient(@RequestParam(value = "email") String email){
        Client client = clientRepository.findClientByEmailEquals(email);
        if(client != null) {
            client = securityClientService.createAndUpdatePasswordClient(client);
        }
    }*/



    @RequestMapping(method = POST)
    @ResponseStatus(value = HttpStatus.CREATED)
    public Client addClient(@RequestBody Client client) {

        Client clientExist = clientRepository.findClientByEmailEquals(client.getEmail());
        if (clientExist == null) {
            securityClientService.createAndUpdatePasswordClient(client);
            client.setStatusActif("inactive"); // active / removed
            client.setAccreditation("user"); // admin
            return clientService.addClient(client);
        } else {
            return null;
        }
    }



    @RequestMapping(path = "/update",method = POST)
    @ResponseStatus(value = OK)
    public Client updateClient(@RequestBody Client newClient, @RequestParam String token, @RequestParam String password) {
        Client client = clientService.findByToken(token);
        String psw = securityClientService.hashPassword(password);
        return clientService.updateNewInformationsClient(newClient, client, psw);
    }



    @RequestMapping(method = DELETE)
    @ResponseStatus(value = ACCEPTED)
    public String deleteClient(@RequestParam() String token){
        Client client = clientRepository.findClientByTokenEquals(token);
        client.setStatusActif("removed");
        clientRepository.save(client);
        return "redirect:index.html";
    }
}
