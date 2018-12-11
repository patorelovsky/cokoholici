package sk.euba.fhi.swi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sk.euba.fhi.swi.model.Poskytovatel;
import sk.euba.fhi.swi.repository.PoskytovatelRepository;

import java.util.Optional;

@RestController
@RequestMapping("poskytovatelia")
public class PoskytovatelControler {

    @Autowired
    private PoskytovatelRepository poskytovatelRepository;

    @RequestMapping("existsById")
    public Boolean existsById(String id) {

        return poskytovatelRepository.existsById(id);
    }

    @RequestMapping("findById")
    public Optional<Poskytovatel> findById(String id) {

        return poskytovatelRepository.findById(id);
    }
}
