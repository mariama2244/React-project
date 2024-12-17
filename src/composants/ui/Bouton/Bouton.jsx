
export default function Bouton({ couleur }) {
    return (
        <button style= {{
            backgroundColor: couleur ? couleur : "green", 
            color: "white",
            padding: "0.7em",
            border: "none",
            borderRadius: "5px"
        }}>
        valider</button>
    )
}