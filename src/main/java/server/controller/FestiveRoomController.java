package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import server.model.FestiveRoom;
import server.repository.FestiveRoomRepository;
import java.util.List;
import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@RequestMapping("/api/festiveroom")
public class FestiveRoomController {

    @Autowired
    private FestiveRoomRepository festiveRoomRepository;

    @RequestMapping( value = "/all", method = GET)
    public List<FestiveRoom> findAll(){
        return festiveRoomRepository.findAll();
    }
/*
    @RequestMapping(method = POST)
    public void addFestiveRoom(@RequestBody FestiveRoom festiveRoom){
        festiveRoomRepository.save(festiveRoom);
    }*/

}