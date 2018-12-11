package sk.euba.fhi.swi.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Sluzba {

    @Id
    private String KodSluzby;
    private String nazovSluzby;
    private Float poplatokZaSluzbu;

    public String getKodSluzby() {
        return KodSluzby;
    }

    public void setKodSluzby(String kodSluzby) {
        KodSluzby = kodSluzby;
    }

    public String getNazovSluzby() {
        return nazovSluzby;
    }

    public void setNazovSluzby(String nazovSluzby) {
        this.nazovSluzby = nazovSluzby;
    }

    public Float getPoplatokZaSluzbu() {
        return poplatokZaSluzbu;
    }

    public void setPoplatokZaSluzbu(Float poplatokZaSluzbu) {
        this.poplatokZaSluzbu = poplatokZaSluzbu;
    }
}
