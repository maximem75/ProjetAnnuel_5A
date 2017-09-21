package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import server.model.PictureGalery;
import server.repository.PictureGaleryRepository;
import server.service.ClientService;
import server.utils.FilePathGenerator;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.FOUND;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

/**
 * Created by maxime on 20/09/2017.
 */
@RestController
@RequestMapping("/api/pictureGalery")
public class PictureGaleryController {

    private String PRE_PATH = "\\src\\main\\resources\\static\\img\\Galery";

    @Autowired
    private PictureGaleryRepository pictureGaleryRepository;

    @Autowired
    private ClientService clientService;

    @RequestMapping(method = GET)
    @ResponseStatus(FOUND)
    public List<PictureGalery> getListPictureGalery(){
        return pictureGaleryRepository.findAll();
    }

    @RequestMapping(method = POST)
    @ResponseStatus(CREATED)
    public void addPictureGalery(@RequestBody PictureGalery pictureGalery, @RequestParam("token") String token){
        if(clientService.adminAccess(token)){
            pictureGalery.setPath(FilePathGenerator.generatePath(pictureGalery.getPath(), PRE_PATH));
            pictureGaleryRepository.save(pictureGalery);
        }
    }

    @RequestMapping(method = DELETE)
    @ResponseStatus(OK)
    public void deletePictureGalery(@RequestBody PictureGalery pictureGalery, @RequestParam("token") String token){
        if(clientService.adminAccess(token)){
            pictureGaleryRepository.delete(pictureGalery.getId());
        }
    }

}
