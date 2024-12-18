import PropTypes from 'prop-types'

Bouton.propTypes = {
    couleur: PropTypes.string,
    children: PropTypes.node.isRequired,
    gereClique: PropTypes.func.isRequired
}
export default function Bouton({ couleur, children, gereClique }) {
   
    return (
        <button
        //  style= {{
        //     backgroundColor: couleur ? couleur : "green", 
        //     color: "white",
        //     padding: "0.7em",
        //     border: "none",
        //     borderRadius: "5px"
        // }}
        onClick={gereClique}
        className="b-none p-2 rounded hover:opacity-75 transition"
        style={{ backgroundColor: couleur ?  couleur : "orange", padding: '10px 20px', margin: '5px' }}>
        {children}
        </button>
    )
}

