package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import server.model.PictureRoomCategory;
import server.repository.PictureRoomCategoryRepository;
import server.service.ClientService;
import server.utils.File.FileManager;

import java.util.List;

import static org.springframework.http.HttpStatus.*;
import static org.springframework.web.bind.annotation.RequestMethod.*;

/**
 * Created by maxime on 20/09/2017.
 */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/pictureRoomCategory")
public class PictureRoomCategoryController {

    private String PRE_PATH = "/src/main/resources/static/img/PictureRoomCategory/";
    private String PRE_PATH_FRONT = "img/PictureRoomCategory/";

    @Autowired
    private PictureRoomCategoryRepository pictureRoomCategoryRepository;

    @Autowired
    private ClientService clientService;

    @RequestMapping(method = POST)
    @ResponseStatus(CREATED)
    public void addPictureRoomCategory(@RequestBody PictureRoomCategory pictureRoomCategory, @RequestParam("file") MultipartFile file, @RequestParam("token") String token) {
        if (clientService.adminAccess(token)) {
            String pathServer = PRE_PATH + "/" + pictureRoomCategory.getIdRoomCategory() + "/" + file.getOriginalFilename();

            FileManager fm = new FileManager();
            fm.saveImage(file, pathServer);

            pictureRoomCategory.setPath(PRE_PATH_FRONT + "/" + pictureRoomCategory.getIdRoomCategory() + "/" + file.getOriginalFilename());
            pictureRoomCategoryRepository.save(pictureRoomCategory);
        }
    }

    @RequestMapping(method = PUT)
    @ResponseStatus(ACCEPTED)
    public void updatePictureRoomCategory(@RequestBody PictureRoomCategory pictureRoomCategory, @RequestParam("file") MultipartFile file, @RequestParam("token") String token) {
        if (clientService.adminAccess(token)) {
            String pathServer = PRE_PATH + "/" + pictureRoomCategory.getId() + "/" + file.getOriginalFilename();

            FileManager fm = new FileManager();
            fm.saveImage(file, pathServer);

            pictureRoomCategory.setPath(PRE_PATH_FRONT + "/" + pictureRoomCategory.getId() + "/" + file.getOriginalFilename());
            pictureRoomCategoryRepository.save(pictureRoomCategory);
        }
    }

    @RequestMapping(method = GET)
    @ResponseStatus(OK)
    public List<PictureRoomCategory> getListPictureRoomCategory() {
        return pictureRoomCategoryRepository.findAll();
    }

    @RequestMapping(method = DELETE)
    @ResponseStatus(OK)
    public void removePictureRoomCategory(@RequestParam("id") Long id, @RequestParam("token") String token) {
        if (clientService.adminAccess(token)) {
            pictureRoomCategoryRepository.delete(id);
        }
    }
}
