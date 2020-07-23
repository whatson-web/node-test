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

Exemple d'un artiste:

```
{
    "name": "James Brown",
    "nationality": "USA",
    "_id": "fPsGa25uqjrhBGms"
}
```

Exemple d'une chanson:

```
{
    "title": "The Payback Part 1",
    "releaseYear": "1974",
    "duration": "2:49",
    "artistId": "fPsGa25uqjrhBGms",
    "_id": "oFAmkL4GAup7uyg3"
}
```

Vous devrez améliorer l'API déjà existante en réalisant les tâches numérotées ci-dessous. 

Les données sont gérées par la librairie <a href="https://github.com/louischatriot/nedb">NeDB</a> qui persiste les données dans des
fichiers, présents dans le dossier `src/data`. Chaque route a (ou aura) sa propre table correspondante.

A vous de réaliser les tâches en essayant au mieux de respecter l'architecture déjà mise en place, 
et en lisant les documentations respectives des technologies utilisées: <a href="https://expressjs.com/">Express</a>, <a href="https://github.com/louischatriot/nedb">NeDB</a> . Vous êtes libres d'utiliser les librairies de votre choix (ou même de ne pas en utiliser),
et êtes invités à commenter votre code quand celà vous semble nécessaire.

3 chansons et 3 artistes seront initialement présents dans la base de données. Libre à vous d'en créer d'autre ou de les modifier pour les besoins de
vos tests.

Vous êtes encouragésà utiliser un logiciel client API pour teser vos routes tel que <a href="https://www.postman.com/">Postman</a>.

Bon Courage !

<ol>
<li>
  Chaque chanson est liée à un artiste
</li>
</ol>
