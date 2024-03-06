// Pour pouvoir utiliser une feuille de style CSS dans un fichier/composante React, il faut l'importer
// comme si on importait une librairie
import "./ComposanteB.css"

function ComposanteB() {
    return (
        // Avec la syntaxt JSX, on utilise className à la place de class pour référer un élément (voir ComposanteB.css)
        <p className="paragraphe">Ceci est un paragraphe de la composante B</p>
    );
}

export default ComposanteB;