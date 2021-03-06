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

Vous êtes encouragés à utiliser un logiciel client API pour teser vos routes tel que <a href="https://www.postman.com/">Postman</a>.

Bon Courage !



## Tâches à réaliser


<ol>
<li>
  Chaque chanson est liée à un artiste via la propriété `artistId`. Faites en sorte que les routes GET de `songs` renvoit au client toutes les données de l'artiste correspondant. Exemple:
    
```
{
    "title": "The Payback Part 1",
    "releaseYear": "1974",
    "duration": "2:49",
    "artistId": "fPsGa25uqjrhBGms",
    "_id": "oFAmkL4GAup7uyg3",
    "artist": {
        "name": "James Brown",
        "nationality": "USA",
        "_id": "fPsGa25uqjrhBGms"
    }
}
```
</li>
<br/>

<li>
    Lorsqu'un utilisateur récupère un artiste directment via son id (route `/artists/:id`), faites en sorte de transmettre dans la réponse
    une propriété `numberOfSongs` pour afficher le nombre de chansons dont l'artiste est l'auteur.
</li>
<br/>

<li>
    Créer une nouvelle table et un nouvel ensemble de route appelé `genres` où on pourra créer et lister (POST et GET) des genres musicaux.
    Un genre musical sera défini uniquement par son nom (`name`). Exemple "Rap", "Classique", "Jazz" etc...
    On pourra également attribuer un genre à une chanson, de la même manière dont on associe les chansons aux artistes. Et il faudra transmettre
    l'objet "genre" via la route `songs`comme lors de la question 1.
</li>
<br/>

<li>
    Mettre en place un système de validation sur les routes POST qui obligera l'utilisateur a renseigner tous les champs lors de la création d'une donnée, sur les routes `songs`, `artists` et `genres` tel que défini dans les structures de données fournies plus haut ou dans les questions. Si l'un des champs est manquant, la donnée ne sera pas créée et sera envoyé en retour un code HTTP 400 Bad Request avec un message précisant les champs manquants.
</li>
<br/>

<li>
  Mettre en place deux routes de méthode `DELETE` permettant de supprimer respectivement un artiste ou une chanson en fournissant l'id de la donnée à supprimer en paramètre. Lors de la suppression d'un artiste, il faudra vérifier qu'aucune chanson n'est associé à l'artiste à supprimer. Si il y a au moins une chanson associé à l'artiste en question, il faudra annuler l'opération et renvoyer un code HTTP 403 Forbidden.
</li>
<br/>
</ol>
