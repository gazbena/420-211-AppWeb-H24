export default function Adresse(props) {
    return (
        <div>
            <p>{props.adr.numero} {props.adr.rue}</p>
            <p>{props.adr.ville}</p>
        </div>

    );
}