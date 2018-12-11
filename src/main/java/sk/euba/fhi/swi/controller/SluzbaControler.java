package sk.euba.fhi.swi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sk.euba.fhi.swi.model.Sluzba;
import sk.euba.fhi.swi.repository.SluzbaRepository;

import java.util.Optional;

@RestController
@RequestMapping("sluzby")
public class SluzbaControler {

    @Autowired
    private SluzbaRepository sluzbaRepository;

    @RequestMapping("existsById")
    public Boolean existsById(String id) {

        return sluzbaRepository.existsById(id);
    }

    @RequestMapping("findById")
    public Optional<Sluzba> findById(String id) {

        return sluzbaRepository.findById(id);
    }
}
