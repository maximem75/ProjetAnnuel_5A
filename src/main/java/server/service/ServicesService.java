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

}
