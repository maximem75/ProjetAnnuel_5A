package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import server.model.Service;
import server.repository.ServiceRepository;
import java.util.List;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@Controller
@RequestMapping("/api/service")
public class ServiceController {

    @Autowired
    private ServiceRepository serviceRepository;
/*
    @RequestMapping( path = "/all", method = GET)
    public List<Service> findAll(){
        return serviceRepository.findAll();
    }*/

    @RequestMapping(path = "/all", method = GET)
    @ResponseStatus(value = HttpStatus.FOUND)
    public List<Service> getListServices() {
        List<Service> listServices = serviceRepository.findAll();
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
