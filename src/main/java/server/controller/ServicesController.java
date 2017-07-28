package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import server.model.Services;
import server.service.ServicesService;
import java.util.List;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping("/api/services")
public class ServicesController {

    @Autowired
    private ServicesService servicesService;

    @RequestMapping( path = "/all", method = GET)
    @ResponseStatus(value = OK)
    public List<Services> getListServices(){
        List<Services> listServices = servicesService.getListServices();
        return listServices;
    }

    @RequestMapping( value = "/name/{name}", method = GET)
    public List<Services> getServiceByName(@PathVariable String name){
        return servicesService.getServiceByName(name);
    }

    @RequestMapping( value = "/{id}", method = GET)
    public Services getServiceById(@PathVariable int id){
        return servicesService.getServicesById(id);
    }

    @RequestMapping(method = POST)
    public void addService(@RequestBody Services service){
        servicesService.addServices(service);
    }

    @RequestMapping( value = "/delete/{id}", method = DELETE)
    @ResponseBody
    public void deleteService(@PathVariable int id){
            servicesService.deleteService(id);
    }
}
