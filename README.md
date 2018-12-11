# Projekt z predmetu Softvérové inžinierstvo I
**Ekonomicka univerzita**  
**Fakulta hospodrárskej informatiky**

**Autor:** Bc. Marián Puškáš, Bc. Patrik Reľovský, Bc. Daniel Petrus  
**Projekt:** Anonymní čokoholici

## I. Míľnik: 
* Aplikácia (webová) - obrazovka na pridanie záznamu do DB
* Aplikácia (webová) - obrazovka na zobrazenie záznamov z DB
* Zdrojové kódy aplikácie sú umiestnené na GitHub
* Aplikácia funguje lokálne, DB na Google Cloud

 ## II. Míľnik
* Aplikácia dokáže zobraziť zoznam úkonov a ich cenu
* Aplikácia dokáže zobraziť poskytovateľov, čokoholikov a služby
* Aplikácia dokáže zachytiť využitie služby u poskytovateľa čokoholikom (Validácia na platnosť členstva nie je potrebná)
* Z databázy (nemusí byť cez GUI) je možné zistiť, využitie služieb čokoholikmi. Spolu s celkovou sumou za služby  
  
# Front end
Angular 6 + Angular Material (Material Design components for Angular)  
## Development
"ng serve --open"  
  
## Production
* "ng build --prod"
* potrebný server napr. http-server, inštalácia pomocou npm - "npm i http-server"
* "http-server -o"

### Pri testovaní na jednom počítači je potrebné spustiť front end v prehľadávači s vypnutou CORS ochranou  
**Napríklad pre Google Chrome:**  
* win + R
* "chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security"
* spustiť
  
# Back end
Java, spring(Boot, JPA, Security...), hibernate, tomcat
## Spustenie:
* pomocou Intellij
* terminal "./gradlew bootRun"
## Vytvorenie JAR
"./gradlew build"
