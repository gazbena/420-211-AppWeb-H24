import Adresse from "./Adresse";

export default function Infos(props) {
    return (
        <div>
            <h3>{props.id.nom}, {props.id.prenom}</h3>
            <Adresse adr={props.id.adresse} />
        </div>
    );
}