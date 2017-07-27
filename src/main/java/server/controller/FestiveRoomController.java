package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import server.model.FestiveRoom;
import server.repository.FestiveRoomRepository;
import java.util.List;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping("/api/festiveroom")
public class FestiveRoomController {

    @Autowired
    private FestiveRoomRepository festiveRoomRepository;

    @RequestMapping( value = "/all", method = GET)
    public List<FestiveRoom> getAllFestiveRoom(){
        return festiveRoomRepository.findAll();
    }

    @RequestMapping( value = "/{id}", method = GET)
    public FestiveRoom getFestiveRoomById(@PathVariable int id){
        return festiveRoomRepository.findById(id);
    }

    @RequestMapping( value = "/availability/{available}", method = GET)
    public List<FestiveRoom> getFestiveRoomByAvailability(@PathVariable String available){
        return festiveRoomRepository.findByAvailable(available);
    }

    @RequestMapping(method = POST)
    public void addFestiveRoom(@RequestBody FestiveRoom festiveRoom){
        festiveRoomRepository.save(festiveRoom);
    }
}