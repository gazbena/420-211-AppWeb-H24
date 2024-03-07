import "./App.css"
import Saison from "./composantes/Saison"
import Personne from "./composantes/Personne"

export default function App() {
    return (
        <div>
            <div className="exemple-props-objet-simple">
                <h1 className="grey">Exemple</h1>
                <Saison nom="printemps" mois="mars" />
                <Saison nom="été" mois="juin" />
            </div>
            <div className="exemple-props-objet-complexe">
                <Personne />
            </div>

        </div>
    )
}