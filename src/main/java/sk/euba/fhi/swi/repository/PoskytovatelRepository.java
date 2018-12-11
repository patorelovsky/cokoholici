package sk.euba.fhi.swi.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import sk.euba.fhi.swi.model.Poskytovatel;

@RepositoryRestResource( collectionResourceRel = "poskytovatelia", path = "poskytovatelia" )
public interface PoskytovatelRepository extends PagingAndSortingRepository<Poskytovatel, String>  {

}
