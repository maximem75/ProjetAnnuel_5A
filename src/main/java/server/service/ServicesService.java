package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.model.Services;
import server.repository.ServicesRepository;
import java.util.List;


@Service
public class ServicesService {
    @Autowired
    private ServicesRepository serviceRepository;

    public List<Services> getListServices(){
        return serviceRepository.getListServices();
    }

    public Services getServicesById(int id){
        return serviceRepository.findById(id);
    }

    public List<Services> getServiceByName(String name){
        return serviceRepository.findByName(name);
    }

    public void addServices(Services services){
        serviceRepository.save(services);
    }

    public String deleteService(int id){
        try{
            Services s = serviceRepository.findById(id);
            serviceRepository.delete(s);
        }catch (Exception ex){
            return "Error deleting table : "+ex.toString();
        }
        return "service successfully deleted";
    }
}
