package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import server.model.PictureGalery;
import server.repository.PictureGaleryRepository;
import server.service.ClientService;
import server.utils.File.FileManager;

import java.util.List;

import static org.springframework.http.HttpStatus.*;
import static org.springframework.web.bind.annotation.RequestMethod.*;

/**
 * Created by maxime on 20/09/2017.
 */
@RestController
@RequestMapping("/api/pictureGalery")
public class PictureGaleryController {

    private String PRE_PATH = "\\src\\main\\resources\\static\\img\\Galery\\";
    private String PRE_PATH_FRONT = "img/Galery";

    @Autowired
    private PictureGaleryRepository pictureGaleryRepository;

    @Autowired
    private ClientService clientService;

    @RequestMapping(method = GET)
    @ResponseStatus(FOUND)
    public List<PictureGalery> getListPictureGalery() {
        return pictureGaleryRepository.findAll();
    }

    @RequestMapping(method = POST)
    @ResponseStatus(CREATED)
    public boolean addPictureGalery(@RequestParam("file") MultipartFile file, @RequestParam("token") String token) {
        if (clientService.adminAccess(token)) {
            PictureGalery pictureGalery = new PictureGalery();
            FileManager fm = new FileManager();

            String pathServer = System.getProperty("user.dir") + PRE_PATH + file.getOriginalFilename();
            fm.saveImage(file, pathServer);

            pictureGalery.setPath(PRE_PATH_FRONT + file.getOriginalFilename());
            pictureGaleryRepository.save(pictureGalery);

            return true;
        }

        return false;
    }

    @RequestMapping(method = DELETE)
    @ResponseStatus(OK)
    public void deletePictureGalery(@RequestBody PictureGalery pictureGalery, @RequestParam("token") String token) {
        if (clientService.adminAccess(token)) {
            pictureGaleryRepository.delete(pictureGalery.getId());
        }
    }

}
