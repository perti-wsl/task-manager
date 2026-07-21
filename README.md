# task-manager
Full-stack task manager application with frontend, backend and Jenkins CI pipeline

Documentație tehnică

1. Introducere

Prezentul proiect constă în dezvoltarea unei aplicații web de tip task manager, realizată în arhitectură full-stack, având ca scop gestionarea eficientă a sarcinilor utilizatorului. Aplicația permite crearea, afișarea, modificarea și ștergerea task-urilor, precum și marcarea acestora ca finalizate sau nefinalizate, implementând astfel funcționalitățile esențiale de tip CRUD.

Proiectul a fost conceput nu doar din perspectiva funcționalității aplicației, ci și din perspectiva procesului modern de dezvoltare software. Din acest motiv, soluția integrează mai multe componente importante: interfață frontend, backend API, bază de date relațională, containerizare cu Docker și automatizare CI/CD cu Jenkins. Jenkins descrie pipeline-ul software ca un flux de build, test și deploy, iar acesta este modelul folosit și în cadrul proiectului.

Scopul principal al proiectului este realizarea unei aplicații complete, ușor de rulat și de demonstrat, care să evidențieze atât partea de dezvoltare software, cât și partea de DevOps. În acest mod, proiectul acoperă mai multe competențe practice: proiectarea unei aplicații web, conectarea la baza de date, orchestrarea serviciilor și automatizarea procesului de livrare.
2. Obiectivele proiectului

Obiectivele principale urmărite în cadrul proiectului sunt următoarele:

    dezvoltarea unei aplicații web funcționale de tip task manager;

    implementarea operațiilor CRUD pentru gestionarea task-urilor;

    separarea clară a componentelor frontend, backend și bază de date;

    utilizarea unei baze de date PostgreSQL pentru persistența datelor;

    containerizarea aplicației folosind Docker și Docker Compose;

    automatizarea procesului de build, testare și deploy prin Jenkins;

    verificarea funcționării aplicației prin health check și teste de validare.

Prin atingerea acestor obiective, proiectul demonstrează un flux de lucru apropiat de cel utilizat în proiectele software reale. Jenkins recomandă stocarea definiției fluxului de build, test și deploy într-un fișier de tip Jenkinsfile, ceea ce susține abordarea de automatizare utilizată în această aplicație.
3. Descriere generală a aplicației

Aplicația realizată este un sistem simplu de administrare a task-urilor. Utilizatorul interacționează cu aplicația printr-o interfață grafică accesibilă din browser, unde poate adăuga task-uri noi, le poate modifica pe cele existente, le poate șterge și le poate marca drept finalizate.

La nivel logic, aplicația este împărțită în trei zone principale:

    componenta de frontend, responsabilă cu interfața utilizator;

    componenta de backend, responsabilă cu logica aplicației și expunerea API-ului;

    componenta de bază de date, responsabilă cu stocarea persistentă a informațiilor.

Fluxul de funcționare este următorul: utilizatorul efectuează o acțiune în interfață, frontend-ul trimite o cerere către backend, backend-ul procesează cererea și interacționează cu baza de date, iar apoi răspunsul este afișat înapoi în interfață. Acest model client-server este specific aplicațiilor web moderne și permite o separare clară între prezentare, logică și persistență.
4. Arhitectura sistemului

Arhitectura proiectului este de tip multi-container și include trei servicii principale:

    serviciul de frontend;

    serviciul de backend;

    serviciul de bază de date PostgreSQL.

Frontend-ul are rolul de a furniza interfața prin care utilizatorul interacționează cu aplicația. Backend-ul expune endpoint-uri REST pentru operațiile necesare și gestionează logica aferentă task-urilor. PostgreSQL este utilizat pentru stocarea persistentă a datelor introduse de utilizator.

Pentru rularea unitară a tuturor componentelor s-a utilizat Docker Compose. Acesta permite definirea serviciilor într-un fișier unic și pornirea lor coordonată, astfel încât aplicația să poată fi lansată ușor pe orice sistem care suportă Docker. Documentația Kubernetes menționează inclusiv conversia fișierelor Compose în resurse de orchestrare, ceea ce confirmă rolul Compose ca mecanism valid de definire a serviciilor containerizate.

O reprezentare logică a arhitecturii este următoarea:

text
Utilizator
   |
   v
Frontend
   |
   v
Backend API
   |
   v
PostgreSQL

Această arhitectură oferă modularitate, separarea responsabilităților și ușurință în întreținere. În plus, fiecare serviciu poate fi actualizat sau testat independent.
5. Tehnologii utilizate

În cadrul proiectului au fost utilizate următoarele tehnologii:
Tehnologie	Rol în proiect
Frontend framework	Realizarea interfeței grafice și interacțiunea cu utilizatorul
Backend framework	Implementarea logicii aplicației și a endpoint-urilor API
PostgreSQL	Stocarea persistentă a datelor
Docker	Containerizarea componentelor aplicației
Docker Compose	Orchestrarea locală a serviciilor aplicației
Jenkins	Automatizarea etapelor de build, test și deploy
Jenkinsfile	Definirea pipeline-ului sub formă de cod

Alegerea acestor tehnologii a avut la bază compatibilitatea lor în proiecte de tip full-stack și faptul că permit o demonstrație clară a etapelor moderne de dezvoltare software. Jenkins evidențiază explicit utilizarea Jenkinsfile pentru descrierea întregului flux de build, test și deploy, iar această abordare este potrivită pentru un proiect academic orientat și spre partea de DevOps.
6. Implementarea aplicației

Implementarea aplicației a avut în vedere funcționalitățile de bază ale unui task manager. Din punct de vedere operațional, aplicația oferă suport pentru:

    adăugarea unui task nou;

    afișarea task-urilor existente;

    editarea unui task;

    ștergerea unui task;

    marcarea unui task ca finalizat sau nefinalizat.

Aceste funcționalități corespund modelului CRUD, esențial în aplicațiile care manipulează date persistente. Backend-ul expune endpoint-uri dedicate pentru fiecare operație, iar frontend-ul consumă aceste endpoint-uri pentru a actualiza interfața în timp real.

Pe lângă operațiile CRUD, aplicația include și un endpoint de health check. Acesta este folosit pentru a verifica rapid dacă backend-ul rulează corect și dacă serviciul răspunde la cereri. În practică, acest endpoint este important atât pentru testarea locală, cât și pentru etapa de deploy automatizat, unde poate fi utilizat ca verificare finală după lansarea aplicației.

Persistența datelor este asigurată prin PostgreSQL. Datele task-urilor nu sunt păstrate doar în memorie, ci salvate în baza de date, ceea ce permite menținerea acestora după refresh și, în funcție de configurație, după repornirea serviciilor. Această caracteristică este esențială pentru validarea corectă a aplicației.
7. Containerizare și rulare cu Docker Compose

Pentru a simplifica rularea proiectului, toate componentele au fost containerizate. Docker permite împachetarea fiecărei componente împreună cu dependențele sale, asigurând o execuție consistentă indiferent de sistemul pe care rulează aplicația.

Docker Compose este utilizat pentru a defini și porni toate serviciile necesare aplicației într-o manieră coordonată. Într-o configurație tipică, fișierul docker-compose.yml descrie:

    imaginea sau build-ul pentru frontend;

    imaginea sau build-ul pentru backend;

    serviciul PostgreSQL;

    porturile expuse;

    volumele necesare pentru persistență;

    variabilele de mediu utilizate de servicii.

Avantajul acestei abordări este că aplicația poate fi pornită printr-o singură comandă, fără configurări manuale suplimentare. În plus, serviciile sunt izolate logic, dar rămân conectate între ele în cadrul aceleiași rețele Docker.
8. Automatizare și pipeline-uri Jenkins

Una dintre cerințele importante ale proiectului este existența pipeline-urilor Jenkins. Conform modelului standard Jenkins, cel mai simplu pipeline complet conține trei etape principale: Build, Test și Deploy. Documentația oficială Jenkins precizează explicit că un pipeline elementar de continuous delivery are, la minimum, aceste trei stadii definite într-un Jenkinsfile.

În contextul acestui proiect, cele trei pipeline-uri pot fi interpretate astfel:
Pipeline 1 – Build

Primul pipeline este responsabil pentru pregătirea aplicației. În această etapă sunt realizate acțiuni precum:

    preluarea codului sursă din repository;

    instalarea dependențelor necesare;

    construirea aplicației frontend;

    pregătirea componentei backend;

    eventual construirea imaginilor Docker.

Scopul acestui pipeline este confirmarea faptului că proiectul poate fi construit fără erori.
Pipeline 2 – Test

Al doilea pipeline este dedicat verificării corectitudinii aplicației. În această etapă pot fi rulate:

    teste unitare;

    comenzi de lint;

    verificări de integritate a codului;

    teste simple pentru endpoint-uri sau servicii.

Jenkins rulează stadiile în ordine și oprește execuția dacă o etapă eșuează, pentru a evita deploy-ul unei versiuni defecte.
Pipeline 3 – Deploy

Al treilea pipeline este responsabil de lansarea efectivă a aplicației. În acest proiect, etapa de deploy poate include:

    pornirea containerelor cu Docker Compose;

    actualizarea serviciilor;

    verificarea stării containerelor;

    testarea endpoint-ului de health.

Rolul acestei etape este de a demonstra că aplicația nu doar se construiește și se testează, ci poate fi și pusă în execuție în mod automatizat. Jenkins tratează etapa de Deploy ca faza finală a pipeline-ului, executată doar după ce build-ul și testele au fost finalizate cu succes.

Definirea acestor pași într-un Jenkinsfile oferă avantajul versiunii controlate și al reproductibilității. Jenkins descrie această abordare ca „Pipeline as Code”, adică păstrarea logicii de automatizare alături de codul proiectului.
9. Testare și validare

Pentru validarea proiectului au fost verificate atât funcționalitățile aplicației, cât și partea de infrastructură software. Testarea aplicației s-a realizat prin scenarii practice, concentrate pe funcțiile esențiale.

Au fost verificate următoarele aspecte:

    pornirea corectă a tuturor serviciilor;

    afișarea interfeței frontend în browser;

    adăugarea unui task nou;

    editarea unui task existent;

    ștergerea unui task;

    schimbarea stării unui task;

    răspunsul corect al endpoint-ului de health;

    persistența datelor după refresh;

    funcționarea pipeline-ului Jenkins până la final.

Verificarea endpoint-ului de health se poate realiza direct din browser sau din terminal, prin accesarea rutei corespunzătoare backend-ului. Răspunsul corect confirmă disponibilitatea serviciului backend și este util inclusiv după deploy.

Pentru testarea persistenței datelor se poate utiliza un scenariu simplu: se adaugă un task nou, se reîncarcă pagina și se observă dacă task-ul este păstrat. Un test mai puternic constă în repornirea serviciilor și verificarea existenței datelor după restart. Acest pas confirmă faptul că baza de date funcționează corect și că datele nu sunt pierdute.

Validarea pipeline-ului Jenkins se realizează prin analiza consolei job-ului și prin verificarea faptului că toate etapele se încheie cu succes. În mod ideal, rezultatul final trebuie să indice un build reușit și o aplicație disponibilă pentru utilizare.
10. Instalare și rulare

Pentru rularea proiectului este necesar un mediu care să permită execuția containerelor Docker și, opțional, un server Jenkins pentru partea de automatizare. Pașii generali de instalare și rulare sunt următorii:

    Se clonează repository-ul proiectului.

    Se verifică existența fișierelor necesare, inclusiv docker-compose.yml și Jenkinsfile.

    Se pornesc serviciile folosind Docker Compose.

    Se accesează frontend-ul în browser, pe portul configurat.

    Se verifică backend-ul și endpoint-ul de health.

    Se rulează pipeline-ul Jenkins pentru validarea etapelor de build, test și deploy.

Această secțiune poate fi completată în funcție de structura exactă a proiectului, cu comenzile reale utilizate în implementare. Important este ca pașii să fie clari și reproductibili.
11. Avantaje ale soluției propuse

Soluția implementată oferă mai multe avantaje tehnice:

    separarea clară a componentelor aplicației;

    rulare ușoară și reproductibilă prin containere;

    persistența datelor prin baza de date PostgreSQL;

    automatizarea etapelor repetitive cu Jenkins;

    posibilitatea extinderii ulterioare cu noi funcționalități.

Prin această structură, proiectul este ușor de prezentat, testat și menținut. De asemenea, arhitectura permite o dezvoltare viitoare mai simplă, deoarece fiecare componentă poate fi modificată independent de celelalte.
12. Concluzii și dezvoltări viitoare

Proiectul demonstrează realizarea unei aplicații web complete, care integrează atât elemente de dezvoltare software, cât și elemente de automatizare și containerizare. Au fost implementate operațiile CRUD, conectarea la baza de date, rularea în containere și automatizarea cu Jenkins, rezultând o aplicație funcțională și ușor de demonstrat.

Din punct de vedere educațional, proiectul evidențiază un flux modern de lucru: dezvoltare modulară, orchestrare cu Docker Compose și pipeline CI/CD bazat pe etape de Build, Test și Deploy, așa cum recomandă documentația Jenkins.

Ca direcții de dezvoltare viitoare, aplicația poate fi extinsă prin:

    autentificare și autorizare utilizatori;

    filtrare și căutare task-uri;

    prioritizare și categorisire a task-urilor;

    notificări sau remindere;

    integrare cu Kubernetes sau cu un mediu cloud pentru deployment.