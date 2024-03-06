## Comment créer une composante React ?

### Etape 1 : Créer 2 fichiers (ComposanteA.js et ComposanteB.css)

La première chose à faire, c'est de créer 2 fichiers :
- Un fichier javascript
- un fichier de style pour la composante (`ComposanteA.css`)

### Étape 2 : importer le fichier de style (`ComposanteA.css`) dans le fichier javascript

```jsx
import './ComposanteA.css';
```

### Étape 3 : Créer une fonction ComposanteA()

```jsx
function ComposanteA() {
    return (
        <h1> Ceci est la composante A </h1>
    );
}
```
### Étape 4 : exporter la fonction ComposanteA()

À la suite de votre fonction, exportez la composante en écrivant cette ligne :

```jsx
export default ComposanteA();
```

### Étape 5 : Injecter la composante dans la fonction App() (App.js)
Il faut d'abord importer la composante (au début du fichier) :

```jsx
import ComposanteA from './ComposanteA';
 
```

Ensuite, injectez la composante dans la fonction App(), comme suit :

```js
function MyApp() {
    return (
        <ComposanteA />
    );
}
```

