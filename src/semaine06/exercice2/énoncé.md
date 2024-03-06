# EXERCICE 2

Utilisez les **props** pour afficher chacun des films de votre liste dans un composant `Film()`.

```jsx
const films = [
    {titre: "Alien", genre: "SciFi", annee: 1979, image:"./img/alien.jpg"},
    {titre: "Everything Everywhere All At Once", genre: "Comédie", annee: 2022, image:"./img/everything.jpg"},
    {titre: "Falling", genre: "Drame", annee: 2020, image:"./img/falling.jpg"}
]

function Film(props) {
    return (
        <!-- ÉCRIVEZ VOTRE CODE ICI -->
    );
}

function App() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Film idx={0} />
                <Film idx={1} />
                <Film idx={2} />
            </div>
        </div>
    );
}

```