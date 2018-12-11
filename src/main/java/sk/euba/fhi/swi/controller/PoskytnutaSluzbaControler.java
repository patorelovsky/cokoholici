package sk.euba.fhi.swi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sk.euba.fhi.swi.model.PoskytnutaSluzba;
import sk.euba.fhi.swi.repository.PoskytnutaSluzbaRepository;

import java.util.Optional;

@RestController
@RequestMapping( "poskytnutesluzby" )
public class PoskytnutaSluzbaControler {

    @Autowired
    private PoskytnutaSluzbaRepository poskytnutaSluzbaRepository;

    @RequestMapping( "existsById" )
    public Boolean existsById( Long id ) {

        return poskytnutaSluzbaRepository.existsById(id);
    }

    @RequestMapping( "findById" )
    public Optional<PoskytnutaSluzba> findById(Long id ) {

        return poskytnutaSluzbaRepository.findById(id);
    }
}
