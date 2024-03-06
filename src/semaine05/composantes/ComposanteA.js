import "./ComposanteA.css"
// On doit importer les composantes enfants que l'on veut injecter dans la composante parent
import ComposanteA1 from "./ComposanteA1";
import ComposanteA2 from "./ComposanteA2";

// Ceci est un composant "parent" (parent Component)
function ComposanteA() {
    return (
        <div>
            {/* Ceux-ci sont des composants enfants (child Components) */}
            <h3>Ceci est la composante A</h3>
            <ComposanteA1 />
            <ComposanteA2 />
        </div>

    );
}

export default ComposanteA;