package sk.euba.fhi.swi.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sk.euba.fhi.swi.model.security.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
