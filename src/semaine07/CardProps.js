export default function CardProps(props) {
    console.log(props)
    return (
        <>
            <div className="col-md-12 col-lg-4 mb-4 my-3">
                <div className="card">
                    <img alt="belt" src={props.image} className="w-100" />
                    <div className="card-body text-center">
                        <h5 className="card-title mb-3">{props.nom}</h5>
                        <p>{props.categorie}</p>
                        <h6 className="mb-3">${props.prix}</h6>
                    </div>
                </div>
            </div>     
        </>
    );
}