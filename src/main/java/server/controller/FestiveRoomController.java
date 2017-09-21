package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.FestiveRoom;
import server.repository.FestiveRoomRepository;
import server.service.ClientService;
import server.utils.FilePathGenerator;

import java.util.List;

import static org.springframework.http.HttpStatus.*;
import static org.springframework.web.bind.annotation.RequestMethod.*;

@RestController
@RequestMapping("/api/festiveRoom")
public class FestiveRoomController {

    private String prePath = "\\src\\main\\resources\\static\\img\\FestiveRoom";

    @Autowired
    private FestiveRoomRepository festiveRoomRepository;

    @Autowired
    private ClientService clientService;

    @RequestMapping(method = GET)
    @ResponseStatus(FOUND)
    public List<FestiveRoom> getListFestiveRooms(@RequestParam("id") int id, @RequestParam("token") String token){

        if(clientService.findByToken(token) != null){
            return festiveRoomRepository.findAll();
        }

        return null;
    }

    @RequestMapping(method = POST)
    @ResponseStatus(CREATED)
    public void addFestiveRoom(@RequestBody FestiveRoom festiveRoom, @RequestParam("token") String token){

        if(clientService.adminAccess(token)){
            festiveRoom.setPicturePath(FilePathGenerator.generatePath(festiveRoom.getPicturePath(), prePath));
            festiveRoomRepository.save(festiveRoom);
        }
    }

    @RequestMapping(method = PUT)
    @ResponseStatus(ACCEPTED)
    public void updateFestiveRoom(@RequestBody FestiveRoom festiveRoom,  @RequestParam("token") String token){

        if(clientService.adminAccess(token)){
            festiveRoomRepository.save(festiveRoom);
        }
    }

    @RequestMapping(method = DELETE)
    @ResponseStatus(OK)
    public void deleteFestiveRoomById(@RequestParam("id") Long id,  @RequestParam("token") String token){

        if(clientService.adminAccess(token)){
            festiveRoomRepository.delete(id);
        }
    }
}