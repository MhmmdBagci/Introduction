# DevOps Bewerbungsseite

Willkommen zu deiner persönlichen DevOps-Bewerbungsseite! Dieses Projekt stellt eine übersichtliche und moderne Webvisitenkarte dar, über die du deine **Skills**, ein **Bewerbungsfoto** sowie **Zertifikate** präsentieren kannst.  

## Inhalte

- **Profil/Willkommenstext**: Stelle dich kurz vor, nenne Wohnort, Alter und was dich im DevOps-Bereich begeistert.  
- **Skills**: Liste deine wichtigsten DevOps-Fähigkeiten auf.  
- **Zertifikate**: Klicke auf einen Skill, um ein Zertifikatsbild anzuzeigen. Falls du noch kein Zertifikat hast, wird „Zertifikat ist in progress“ ausgegeben.  
- **Social Links**: Verweise auf deine LinkedIn- und GitHub-Profile.

## Setup und Nutzung

1. **Repository klonen oder herunterladen**  
   Lade das Repository herunter oder klone es per `git clone`.  

2. **Dateistruktur**  
   Stelle sicher, dass folgende Struktur vorhanden ist:

   ```bash
   .
   ├── index.html
   ├── script.js
   ├── README.md
   └── certificates/
       └── (Hier liegen deine Zertifikats-Bilder)

3. **Updaten der JS Datei**

    Bilder für Zertifikate ablegen

    Lege deine Zertifikats-Bilder im Ordner certificates ab.
    Die Zuordnung zu den jeweiligen Skills erfolgt in der Datei script.js durch das Objekt skillImageMap.
    Wo genau?
    Im oberen Teil der script.js findest du einen Abschnitt:

    ```
    const skillImageMap = {
      'linux': 'certificates/linux_cert.jpg',
      'bash': 'certificates/bash_cert.jpg',
      'python': 'certificates/python_cert.jpg'
      // weitere Skills ...
    };
    ```
    Der Schlüssel links (z. B. 'linux') muss genau so lauten (in Kleinbuchstaben), wie der Skill-Text in index.html (<div class="skill">Linux</div> →   „linux“).
    Der Wert rechts (z. B. 'certificates/linux_cert.jpg') ist der Pfad zur Datei im Ordner certificates.
