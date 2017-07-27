package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import server.model.Services;
import server.repository.ServicesRepository;
import server.service.ServicesService;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;
import static org.springframework.web.bind.annotation.RequestMethod.GET;

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

/*
    @RequestMapping( value = "/{id}", method = GET)
    public Service getServiceById(@PathVariable int id){
        return serviceRepository.findById(id);
    }

    @RequestMapping(method = POST)
    public void addService(@RequestBody Service service){
        serviceRepository.save(service);
    }

    @RequestMapping( value = "/delete/{id}", method = DELETE)
    @ResponseBody
    public String deleteService(@PathVariable int id){
        try{
            Service service = serviceRepository.findById(id);
            serviceRepository.delete(service);
        }catch (Exception ex){
            return "Error deleting service : "+ex.toString();
        }
        return "service successfully deleted";
    }*/
}
