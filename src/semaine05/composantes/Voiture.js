import './Voiture.css'

// Exemple de manipulation d'objets en JS
function Voiture() {
    // Liste d'objets voiture avec les attributs marque, modèle et année
    const voitures = [
        { marque: "Hyundai", modele: "Ioniq 5", annee: 2022 },
        { marque: "Audi", modele: "R8", annee: 2019 },
    ]
    
    // idx est l'index qui permet de référencer un élément de la liste d'objet
    const idx=1;
    
    return (
        <div className="voiture">
            <h1>{voitures[idx].marque}</h1>
            <h3>{voitures[idx].modele}</h3>
            <p>{voitures[idx].annee}</p>
        </div>
    );
}

export default Voiture;