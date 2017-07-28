package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.FestiveRoom;
import server.service.FestiveRoomService;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping("/api/festiveroom")
public class FestiveRoomController {

    @Autowired
    private FestiveRoomService festiveRoomService;

    @RequestMapping( path = "/all", method = GET)
    @ResponseStatus(value = OK)
    public List<FestiveRoom> getAllFestiveRoom(){
        List<FestiveRoom> listFestiveRomm = festiveRoomService.getAllFestiveRoom();
        return listFestiveRomm;
    }

    @RequestMapping( value = "/{id}", method = GET)
    @ResponseStatus(value = OK)
    public FestiveRoom getFestiveRoomById(@PathVariable int id){
        return festiveRoomService.getFestiveRoomById(id);
    }

    @RequestMapping( value = "/availability/{available}", method = GET)
    @ResponseStatus(value = OK)
    public List<FestiveRoom> getFestiveRoomByAvailability(@PathVariable String available){
        return festiveRoomService.getFestiveRoomByAvailability(available);
    }

    @RequestMapping(method = POST)
    @ResponseStatus(HttpStatus.OK)
    public void addFestiveRoom(@RequestBody FestiveRoom festiveRoom){
        festiveRoomService.addFestiveRoom(festiveRoom);
    }


    @RequestMapping( value = "/delete/{id}", method = DELETE)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public void deleteFestiveRoom(int id){
        festiveRoomService.deleteFestiveRoom(id);
    }


}