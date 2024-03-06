import "./App.css"
import Voiture from "./Voiture"

export default function App() {
    return (
        <div>
            <div className="exemple-props-objet-simple">
                <Saison nom="printemps" mois="mars" />
                <Saison nom="été" mois="juin" />
            </div>
            <div className="exemple-props-objet-complexe">
                <Infos id={personne} />
            </div>

        </div>
    )
}