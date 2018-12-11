package sk.euba.fhi.swi.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Poskytovatel {

    @Id
    private String KodPoskytovatela;
    private String menoPoskytovatela;
    private String ulicaAdresyPoskytovatela;
    private String mestoAdresyPoskytovatela;
    private String pscAdresyPoskytovatela;

    public String getKodPoskytovatela() {
        return KodPoskytovatela;
    }

    public void setKodPoskytovatela(String kodPoskytovatela) {
        KodPoskytovatela = kodPoskytovatela;
    }

    public String getMenoPoskytovatela() {
        return menoPoskytovatela;
    }

    public void setMenoPoskytovatela(String menoPoskytovatela) {
        this.menoPoskytovatela = menoPoskytovatela;
    }

    public String getUlicaAdresyPoskytovatela() {
        return ulicaAdresyPoskytovatela;
    }

    public void setUlicaAdresyPoskytovatela(String ulicaAdresyPoskytovatela) {
        this.ulicaAdresyPoskytovatela = ulicaAdresyPoskytovatela;
    }

    public String getMestoAdresyPoskytovatela() {
        return mestoAdresyPoskytovatela;
    }

    public void setMestoAdresyPoskytovatela(String mestoAdresyPoskytovatela) {
        this.mestoAdresyPoskytovatela = mestoAdresyPoskytovatela;
    }

    public String getPscAdresyPoskytovatela() {
        return pscAdresyPoskytovatela;
    }

    public void setPscAdresyPoskytovatela(String pscAdresyPoskytovatela) {
        this.pscAdresyPoskytovatela = pscAdresyPoskytovatela;
    }
}
