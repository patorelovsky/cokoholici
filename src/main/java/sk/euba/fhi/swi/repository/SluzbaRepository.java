package sk.euba.fhi.swi.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import sk.euba.fhi.swi.model.Sluzba;

@RepositoryRestResource( collectionResourceRel = "sluzby", path = "sluzby" )
public interface SluzbaRepository extends PagingAndSortingRepository<Sluzba, String> {

}
