import Infos from "./Infos"

export default function Personne() {
    const personne = { 
        nom: "Chicoine", 
        prenom: "Louis", 
        adresse: { 
            numero: "2222", 
            rue:"Des Prés", 
            ville:"Sherbrooke" 
        } 
    }
    
    return (
        <div>
            <Infos id={personne} />
        </div>
    )
}