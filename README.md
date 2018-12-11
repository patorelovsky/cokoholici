**Projekt:** Anonymní čokoholici

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
