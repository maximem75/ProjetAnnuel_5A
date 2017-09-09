package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import server.model.Building;
import server.model.Room;
import server.service.ClientService;
import server.service.RoomService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;

//@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/room")
public class RoomController {
    @Autowired
    private ClientService clientService;

    @Autowired
    private RoomService roomService;

    @RequestMapping(method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public List<Room> getListRooms(@RequestParam("token") String token) {
        if (clientService.adminAccess(token)) {
            return roomService.getListRooms();
        }

        return null;
    }

    @RequestMapping(method = POST)
    @ResponseStatus(HttpStatus.CREATED)
    public void addRoom(@RequestBody Room room, @RequestParam("token") String token) {
        System.out.println("room controller");
        if (clientService.adminAccess(token)) {
            roomService.addRoom(room);
        }
    }

    @RequestMapping(method = PUT)
    @ResponseStatus(HttpStatus.OK)
    public void updateRoom(@RequestBody Room room, @RequestParam("token") String token) {
        if (clientService.adminAccess(token)) {
            roomService.updateRoom(room);
        }
    }

    @RequestMapping(method = DELETE)
    @ResponseStatus(HttpStatus.OK)
    public void deleteRoom(@RequestParam("id") int id, @RequestParam("token") String token) {
        if (clientService.adminAccess(token)) {
            roomService.deleteRoom(id);
        }
    }
}
