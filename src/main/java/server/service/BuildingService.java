package server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.model.Building;
import server.repository.BuildingRepository;

import java.util.List;

@Service
public class BuildingService {

    @Autowired
    private BuildingRepository buildingRepository;

    public List<Building> getListBuildings(){
        return buildingRepository.getListBuildings();
    }

    public void addBuilding(Building building){
        buildingRepository.save(building);
    }

    public void updateBuilding(Building building){
        buildingRepository.save(building);
    }

    public void deleteBuilding(int id){
        buildingRepository.deleteBuilding(id);
    }
}
