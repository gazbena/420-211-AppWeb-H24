import CardProduit from "./CardProduit";
import CardProps from "./CardProps";
import produits from "./produits"


export default function CardListe() {

    // Pour filtrer en fonction de la catégorie et du prix :
    const produitsAccessoire = produits.filter((produit) => {
        return (produit.categorie === "Pantalons et Jeans" && produit.prix < 30 )
    })

    // Puis on map le tableau sur la composante CardProps()
    const cards = produitsAccessoire.map((produit) => {
        return (
            <CardProps 
                image={produit.image} 
                nom={produit.nom} 
                categorie={produit.categorie} 
                prix={produit.prix} 
            />
        )
    })
    
    return (
        <div className="container py-5">
            <div className="row">
                {cards}
            </div>
        </div>
    );
}