package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.model.RoomCategory;
import server.service.ClientService;
import server.service.RoomCategoryService;
import server.service.RoomService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;

//@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/roomCategory")
public class RoomCategoryController {

    @Autowired
    private RoomCategoryService roomCategoryService;

    @Autowired
    private ClientService clientService;

    @Autowired
    private RoomService roomService;

    @RequestMapping(path = "getListRoomCategories", method = GET)
    @ResponseStatus(value = HttpStatus.FOUND)
    public List<RoomCategory> getListRoomCategories() {
        List<RoomCategory> listRoomCategories = roomCategoryService.getListRoomCategories();

        return listRoomCategories;
    }

    @RequestMapping(method = POST)
    @ResponseStatus(value = HttpStatus.CREATED)
    public void addRoomCategory(@RequestBody RoomCategory roomCategory, @RequestParam("token") String token) {
        if (clientService.adminAccess(token) == true) {
            roomCategoryService.addRoomCategory(roomCategory);
        }
    }

    @RequestMapping(method = PUT)
    @ResponseStatus(value = HttpStatus.CREATED)
    public void updateRoomCategory(@RequestBody RoomCategory roomCategory, @RequestParam("token") String token) {
        if (clientService.adminAccess(token) == true) {
            roomCategoryService.updateRoomCategory(roomCategory);
        }
    }

    @RequestMapping(method = DELETE)
    @ResponseStatus(value = HttpStatus.OK)
    public void deleteRoomCategory(@RequestParam(value = "idRoomCategory") int id, @RequestParam("token") String token) {
        if (clientService.adminAccess(token) == true) {
            roomService.deleteListRoomByCategory(id);
            roomCategoryService.deleteRoomCategory(id);
        }
    }
}
