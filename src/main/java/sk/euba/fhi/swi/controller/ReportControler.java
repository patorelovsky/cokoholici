package sk.euba.fhi.swi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping( "reporty" )
public class ReportControler {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @RequestMapping( "manazer" )
    public List<Map<String, Object>> vytvorReportManazer() {

        return jdbcTemplate.queryForList("SELECT p.kod_poskytovatela AS 'Kód poskytovateľa', " +
                "p.meno_poskytovatela AS 'Meno poskytovateľa', " +
                "COUNT(ps.id) AS 'Počet', " +
                "FORMAT(SUM(s.poplatok_za_sluzbu), 2) AS 'Spolu' " +
                "FROM poskytnuta_sluzba AS ps, poskytovatel AS p, sluzba as s " +
                "WHERE ps.kod_poskytovatela = p.kod_poskytovatela " +
                "AND ps.kod_sluzby = s.kod_sluzby " +
                "AND ps.datum_poskytnutia >= CURDATE() - 7 " +
                "GROUP BY ps.kod_poskytovatela, p.meno_poskytovatela " +
                "ORDER BY ps.kod_poskytovatela");
    }

    @RequestMapping( "poskytovatel" )
    public List<Map<String, Object>> vytvorReportPoskytovatel(String id) {

        return jdbcTemplate.queryForList("SELECT DATE_FORMAT(CONVERT_TZ(ps.datum_poskytnutia, @@global.time_zone, '+01:00'), '%d-%m-%Y') AS 'Dátum služby', " +
                "DATE_FORMAT(CONVERT_TZ(ps.aktualny_datum, @@global.time_zone, '+01:00'), '%d-%m-%Y %T') AS 'Dátum a čas prijatia dát počítačom', " +
                "c.meno_clena AS 'Meno člena', " +
                "c.kod_clena AS 'Číslo člena', " +
                "s.kod_sluzby AS 'Kód služby', " +
                "s.poplatok_za_sluzbu AS 'Poplatok za službu' " +
                "FROM poskytnuta_sluzba as ps, clen as c, sluzba as s " +
                "WHERE ps.kod_clena = c.kod_clena " +
                "AND ps.kod_sluzby = s.kod_sluzby " +
                "AND ps.datum_poskytnutia >= CURDATE() - 7 " +
                "AND ps.kod_poskytovatela = ?", id);
    }

    @RequestMapping ( "sumPoskytovatel" )
    public Float sumPoskytovatel(String id){

        return jdbcTemplate.queryForObject("SELECT sum(s.poplatok_za_sluzbu) " +
                "FROM poskytnuta_sluzba AS ps, sluzba as s " +
                "WHERE ps.kod_sluzby = s.kod_sluzby " +
                "AND ps.datum_poskytnutia >= CURDATE() - 7 " +
                "AND ps.kod_poskytovatela = ?", Float.TYPE, id);
    }

    @RequestMapping( "clen" )
    public List<Map<String, Object>> vytvorReportClen(String id ) {

        return jdbcTemplate.queryForList("SELECT DATE_FORMAT(CONVERT_TZ(ps.datum_poskytnutia, @@global.time_zone, '+01:00'), '%d-%m-%Y') AS 'Dátum poskytnutia služby', " +
                "p.meno_poskytovatela AS 'Meno poskytovateľa', " +
                "s.nazov_sluzby AS 'Názov služby' " +
                "FROM poskytnuta_sluzba AS ps, poskytovatel AS p, sluzba as s " +
                "WHERE ps.kod_poskytovatela = p.kod_poskytovatela " +
                "AND ps.kod_sluzby = s.kod_sluzby " +
                "AND ps.datum_poskytnutia >= CURDATE() - 7 " +
                "AND ps.kod_clena = ?", id);
    }
}
