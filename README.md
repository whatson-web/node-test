## Test Technique: NodeJS & Express

Pour installer le projet:
### `npm install`

Pour démarrer le projet en local:

### `npm start`

## Sujet

Ce repo contient une API simple: une route listant des chansons (`songs`) et une route listant des artistes (`artists`).
Toutes deux permette de lister toutes les données, de fournir une donnée en particulier en passant en paramètre son id dans le path,
et de créer une nouvelle ligne de données via la méthode POST. Par défaut, le serveur démarrera sur le port 3000.

`http://localhost:3000/artists`
`http://localhost:3000/songs`

Vous devrez améliorer l'API déjà existante en réalisant les tâches numérotées ci-dessous. 

Les données sont gérées par la librairie <a href="https://github.com/louischatriot/nedb">NeDB</a> qui persiste les données dans des
fichiers, présents dans le dossier `src/data`. Chaque route a (ou aura) sa propre table correspondante.

A vous de réaliser les tâches en essayant au mieux de respecter l'architecture déjà mise en place, 
et en lisant les documentations respectives des technologies utilisées: <a href="https://expressjs.com/">Express</a>, <a href="https://github.com/louischatriot/nedb">NeDB</a> . Vous êtes libres d'utiliser les librairies de votre choix (ou même de ne pas en utiliser),
et êtes invités à commenter votre code quand celà vous semble nécessaire.

