import CardListe from "./CardListe";
import CardListeMap from "./CardListeMap";
import Hero from "./Hero";
import NavBar from "./NavBar";

export default function App() {
    return (
        <div style={{  backgroundColor: "#eee" }}>
            <NavBar />
            <Hero />
            <CardListe />
        </div>
    );
}