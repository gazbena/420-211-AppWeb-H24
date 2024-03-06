const films = [
    {titre: "Alien", genre: "SciFi", annee: 1979, image:"./img/alien.jpg"},
    {titre: "Everything Everywhere All At Once", genre: "Comédie", annee: 2022, image:"./img/everything.jpg"},
    {titre: "Falling", genre: "Drame", annee: 2020, image:"./img/falling.jpg"}
]

function Film(props) {
    return (
        <div className="col-lg-4">
            <div className="text-center">
                <img src={films[props.idx].image} alt={films[props.idx].image}/>
                <h2>{films[props.idx].titre}</h2>
                <p>{films[props.idx].annee} - {films[props.idx].genre}</p>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Film idx={0} />
                <Film idx={1} />
                <Film idx={2} />
            </div>
        </div>
    );
}
