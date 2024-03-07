export default function NavBar() {
    return (
	    <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
            <div className="container">
                <i className="fa-solid fa-shop me-2"></i> 
                <strong>FASHION CLOTHING</strong>
                <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item">
                            <button className="nav-link mx-2 text-uppercase active" aria-current="page">Offres</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link mx-2 text-uppercase" >Produits</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link mx-2 text-uppercase" >Catalogue</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link mx-2 text-uppercase" >Services</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link mx-2 text-uppercase" >À Propos</button>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item">
                        <button className="nav-link mx-2 text-uppercase" ><i className="fa-solid fa-cart-shopping me-1"></i> Panier</button>
                        </li>
                        <li className="nav-item">
                        <button className="nav-link mx-2 text-uppercase" ><i className="fa-solid fa-circle-user me-1"></i> Compte</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}