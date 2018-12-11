package sk.euba.fhi.swi.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import sk.euba.fhi.swi.model.Clen;

@RepositoryRestResource(collectionResourceRel = "clenovia", path = "clenovia")
public interface ClenRepository extends PagingAndSortingRepository<Clen, String> {

}
