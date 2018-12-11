package sk.euba.fhi.swi.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Clen {

    @Id
    private String KodClena;
    private String menoClena;
    private String ulicaAdresyClena;
    private String mestoAdresyClena;
    private String pscAdresyClena;
    private Boolean statusClena = Boolean.TRUE;

    public String getKodClena() {
        return KodClena;
    }

    public void setKodClena(String kodClena) {
        KodClena = kodClena;
    }

    public String getMenoClena() {
        return menoClena;
    }

    public void setMenoClena(String menoClena) {
        this.menoClena = menoClena;
    }

    public String getUlicaAdresyClena() {
        return ulicaAdresyClena;
    }

    public void setUlicaAdresyClena(String ulicaAdresyClena) {
        this.ulicaAdresyClena = ulicaAdresyClena;
    }

    public String getMestoAdresyClena() {
        return mestoAdresyClena;
    }

    public void setMestoAdresyClena(String mestoAdresyClena) {
        this.mestoAdresyClena = mestoAdresyClena;
    }

    public String getPscAdresyClena() {
        return pscAdresyClena;
    }

    public void setPscAdresyClena(String pscAdresyClena) {
        this.pscAdresyClena = pscAdresyClena;
    }

    public Boolean getStatusClena() {
        return statusClena;
    }

    public void setStatusClena(Boolean statusClena) {
        this.statusClena = statusClena;
    }
}
