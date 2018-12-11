package sk.euba.fhi.swi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sk.euba.fhi.swi.model.Clen;
import sk.euba.fhi.swi.repository.ClenRepository;

import java.util.Optional;

@RestController
@RequestMapping( "clenovia" )
public class ClenControler {

    @Autowired
    private ClenRepository clenRepository;

    @RequestMapping( "existsById" )
    public Boolean existsById( String id ) {

        return clenRepository.existsById(id);
    }

    @RequestMapping( "findById" )
    public Optional<Clen> findById(String id ) {

        return clenRepository.findById(id);
    }

    @RequestMapping( "getStatus" )
    public Boolean getStatus( String id ) {

        Clen clen = clenRepository.findById(id).orElse(null);
        
        return clen == null ? null : clen.getStatusClena();
    }
}
