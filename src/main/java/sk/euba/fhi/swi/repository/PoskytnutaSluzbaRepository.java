package sk.euba.fhi.swi.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import sk.euba.fhi.swi.model.PoskytnutaSluzba;

@RepositoryRestResource(collectionResourceRel = "poskytnutesluzby", path = "poskytnutesluzby")
public interface PoskytnutaSluzbaRepository extends PagingAndSortingRepository<PoskytnutaSluzba, Long> {

}
