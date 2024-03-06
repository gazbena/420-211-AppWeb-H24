import './Film.css'

export default function Film() {
    const films = [
        {titre: "Alien", genre: "SciFi", annee: 1979, image:"./img/alien.jpg"},
        {titre: "Everything Everywhere All At Once", genre: "Comédie", annee: 2022, image:"./img/everything.jpg"},
        {titre: "Falling", genre: "Drame", annee: 2020, image:"./img/falling.jpg"}
    ]
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4">
                    <div className="text-center">
                        <img className="image" src={films[0].image} alt={films[0].image}/>
                        <h2>{films[0].titre}</h2>
                        <p>{films[0].annee} - {films[0].genre}</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-center">
                        <img className="image" src={films[1].image} alt={films[1].image}/>
                        <h2>{films[1].titre}</h2>
                        <p>{films[1].annee} - {films[1].genre}</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-center">
                        <img className="image" src={films[2].image} alt={films[2].image}/>
                        <h2>{films[2].titre}</h2>
                        <p>{films[2].annee} - {films[2].genre}</p>
                    </div>
                </div>
            </div>
        </div>
        );
}