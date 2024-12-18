import PropTypes from 'prop-types'

Bouton.propTypes = {
    couleur: PropTypes.string,
    children: PropTypes.node.isRequired
}
export default function Bouton({ couleur, children }) {
  
    return (
        <button
        //  style= {{
        //     backgroundColor: couleur ? couleur : "green", 
        //     color: "white",
        //     padding: "0.7em",
        //     border: "none",
        //     borderRadius: "5px"
        // }}
        className="b-none p-2 rounded hover:opacity-75 transition"
        style={{ backgroundColor: couleur ?  couleur : "green" }}>
        {children}
        </button>
    )
}

