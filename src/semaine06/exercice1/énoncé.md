# Exercice

Trouvez 3 films sur IMDB et téléchargez l’image (jpg) de son affiche. 

Pour chaque film, créez un objet avec son titre, son genre, son année de sortie et le nom d'un fichier qui contient l'image de son affiche. Créez une liste nommée `films` avec ces objets :

```jsx
const films = [
    {
        titre: "Alien", 
        genre: "SciFi", 
        annee: 1979, 
        image:"./img/alien.jpg"
    },
    {
        titre: "Everything Everywhere All At Once", 
        genre: "Comédie", 
        annee: 2022, 
        image:"./img/everything.jpg"
    },
    {
        titre: "Falling", 
        genre: "Drame", 
        annee: 2020, 
        image:"./img/falling.jpg"
    }
]

```
Mettez les images dans /var/www/html/public/img; assurez-vous que les images ont environ 330x500 comme dimension.

Faites un conteneur qui affiche les informations de ces 3 films dans la structure suivante:

```html
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4">
                    <div className="text-center">
                        {/* 
                        L'image du 1er film dans un <img>
                        Le titre du 1er film dans un élément <h2>
                        Le genre et l'année de sortie du 1er film dans un élément <p>
                        */}
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-center">
                        {/* 
                        L'image du 2e film dans un <img>
                        Le titre du 2e film dans un élément <h2>
                        Le genre et l'année de sortie du 2e film dans un élément <p>
                        */}
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-center">
                        {/* 
                        L'image du 3e film dans un <img>
                        Le titre du 3e film dans un élément <h2>
                        Le genre et l'année de sortie du 3e film dans un élément <p>
                        */}
                    </div>
                </div>
            </div>
        </div>

```