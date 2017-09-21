package server.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by maxime on 21/09/2017.
 */

@Controller
public class WebController {

    @RequestMapping(value = "")
    public ModelAndView getAccueil() {
        ModelAndView mav = new ModelAndView();
        mav.setViewName("index");
        return mav;
    }
}
