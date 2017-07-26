package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import server.model.Building;
import server.service.BuildingService;
import server.service.ClientService;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;

//@CrossOrigin(origins = "*")
@Controller
@RequestMapping("/api/building")
public class BuildingController {

    @Autowired
    private ClientService clientService;

    @Autowired
    private BuildingService buildingService;

    @RequestMapping(method = GET)
    @ResponseStatus(HttpStatus.FOUND)
    public List<Building> getListBuildings(@RequestBody Building building, @RequestParam("token") String token) {
        if (clientService.adminAccess(token) == true) {
            return buildingService.getListBuildings();
        }

        return null;
    }

    @RequestMapping(method = POST)
    @ResponseStatus(HttpStatus.CREATED)
    public void addBuilding(@RequestBody Building building, @RequestParam("token") String token) {
        if (clientService.adminAccess(token) == true) {
            buildingService.addBuilding(building);
        }
    }

    @RequestMapping(method = PUT)
    @ResponseStatus(HttpStatus.OK)
    public void updateBuilding(@RequestBody Building building, @RequestParam("token") String token) {
        if (clientService.adminAccess(token) == true) {
            buildingService.updateBuilding(building);
        }
    }

    @RequestMapping(method = DELETE)
    @ResponseStatus(HttpStatus.OK)
    public void deleteBuilding(@RequestParam("idBuilding") int id, @RequestParam("token") String token) {
        if (clientService.adminAccess(token) == true) {
            buildingService.deleteBuilding(id);
        }
    }
}
