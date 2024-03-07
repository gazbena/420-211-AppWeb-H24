import CardProduit from "./CardProduit";

const produits = [
    {
        image: "./img/ceinture.webp",
        nom: "Centure",
        categorie: "Accessoires",
        prix: 61.99
    },
    {
        image: "./img/chaussures.webp",
        nom: "Chaussures",
        categorie: "Chaussures et baskets",
        prix: 89.99
    },
    {
        image: "./img/chapeau.webp",
        nom: "Chapeau",
        categorie: "Accessoires",
        prix: 24.99
    },
    {
        image: "./img/pantalon.jpg",
        nom: "Pantalon",
        categorie: "Pantalons et Jeans",
        prix: 24.99
    },
    {
        image: "./img/pantalon02.webp",
        nom: "Pantalon",
        categorie: "Pantalons et Jeans",
        prix: 32.99
    },
    {
        image: "./img/t-shirt.webp",
        nom: "T-Shirt",
        categorie: "Chemises et T-Shirts",
        prix: 15.99
    },
]
export default function CardListe() {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 col-lg-4 mb-4 my-3">
                    <div className="card">
                        <img alt="belt" src={produits[0].image} className="w-100" />
                        <div className="card-body text-center">
                            <h5 className="card-title mb-3">{produits[0].nom} </h5>
                            <p>{produits[0].categorie} </p>
                            <h6 className="mb-3">${produits[0].prix} </h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4 mb-4 my-3">
                    <div className="card">
                        <img alt="belt" src={produits[1].image} className="w-100" />
                        <div className="card-body text-center">
                            <h5 className="card-title mb-3">{produits[1].nom} </h5>
                            <p>{produits[1].categorie} </p>
                            <h6 className="mb-3">${produits[1].prix} </h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4 mb-4 my-3">
                    <div className="card">
                        <img alt="belt" src={produits[2].image} className="w-100" />
                        <div className="card-body text-center">
                            <h5 className="card-title mb-3">{produits[2].nom} </h5>
                            <p>{produits[2].categorie} </p>
                            <h6 className="mb-3">${produits[2].prix} </h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4 mb-4 my-3">
                    <div className="card">
                        <img alt="belt" src={produits[3].image} className="w-100" />
                        <div className="card-body text-center">
                            <h5 className="card-title mb-3">{produits[3].nom} </h5>
                            <p>{produits[3].categorie} </p>
                            <h6 className="mb-3">${produits[3].prix} </h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4 mb-4 my-3">
                    <div className="card">
                        <img alt="belt" src={produits[4].image} className="w-100" />
                        <div className="card-body text-center">
                            <h5 className="card-title mb-3">{produits[4].nom} </h5>
                            <p>{produits[4].categorie} </p>
                            <h6 className="mb-3">${produits[4].prix} </h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4 mb-4 my-3">
                    <div className="card">
                        <img alt="belt" src={produits[5].image} className="w-100" />
                        <div className="card-body text-center">
                            <h5 className="card-title mb-3">{produits[5].nom} </h5>
                            <p>{produits[5].categorie} </p>
                            <h6 className="mb-3">${produits[5].prix} </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}