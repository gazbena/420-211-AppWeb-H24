# Props React

Quand on appelle un composant React, on l'injecte comme un élément HTML (e.g. `<MaComposante />`). Ceci appelle une "fonction" nommée `MaComposante()`. Mais, comment passe-t-on des paramètres à cette fonction ?

Réponse: Les **props**

Les attributs définis à l'appel du composant seront passés à la fonction dans un objet nommé 'props'. Considérons l'exemple ci-dessous :

```jsx
function Saison(props) {
    return (
        <p>{props.nom} : commence en {props.mois}</p>
    )
}

function App() {
    return (
        <div>
            <Saison nom="printemps" mois="mars" />
            <Saison nom="été" mois="juin" />
        </div>
    );
}
```

Nous avons une fonction/composante `Saison` qui a comme paramètre `props`. 
Lorsqu'on injecte cette composante dans `App`, on lui donne deux propriétés : `nom` et `mois`

Vu que props est un objet, on peut donc passer des objets complexes aux composantes, comme dans l'exemple suivant : 

```jsx
const personne = { 
    nom: "Chicoine", 
    prenom: "Louis", 
    adresse: { 
        numero: "2222", 
        rue:"Des Prés", 
        ville:"Sherbrooke" 
    } 
}

function Adresse(props) {
    return (
        <div>
            <p>{props.adr.numero} {props.adr.rue}</p>
            <p>{props.adr.ville}</p>
        </div>

    );
}

function Infos(props) {
    return (
        <div>
            <h3>{props.id.nom}, {props.id.prenom}</h3>
            <Adresse adr={props.id.adresse} />
        </div>
    );
}
function App() {
    return (
        <div>
            <Infos id={personne} />
        </div>
    );
}
```