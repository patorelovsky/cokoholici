package sk.euba.fhi.swi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class PoskytnutaSluzba {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    private LocalDateTime aktualnyDatum;
    private LocalDateTime datumPoskytnutia;
    private String kodPoskytovatela;
    private String kodClena;
    private String kodSluzby;
    private String komentar;

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public LocalDateTime getAktualnyDatum() {
        return aktualnyDatum;
    }

    public void setAktualnyDatum(LocalDateTime aktualnyDatum) {
        this.aktualnyDatum = aktualnyDatum;
    }

    public LocalDateTime getDatumPoskytnutia() {
        return datumPoskytnutia;
    }

    public void setDatumPoskytnutia(LocalDateTime datumPoskytnutia) {
        this.datumPoskytnutia = datumPoskytnutia;
    }

    public String getKodPoskytovatela() {
        return kodPoskytovatela;
    }

    public void setKodPoskytovatela(String kodPoskytovatela) {
        this.kodPoskytovatela = kodPoskytovatela;
    }

    public String getKodClena() {
        return kodClena;
    }

    public void setKodClena(String kodClena) {
        this.kodClena = kodClena;
    }

    public String getKodSluzby() {
        return kodSluzby;
    }

    public void setKodSluzby(String kodSluzby) {
        this.kodSluzby = kodSluzby;
    }

    public String getKomentar() {
        return komentar;
    }

    public void setKomentar(String komentar) {
        this.komentar = komentar;
    }
}
