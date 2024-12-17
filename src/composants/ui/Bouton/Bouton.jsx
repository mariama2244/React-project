import PropTypes from 'prop-types'
export default function Bouton({ couleur, children }) {
  
    return (
        <button
         style= {{
            backgroundColor: couleur ? couleur : "green", 
            color: "white",
            padding: "0.7em",
            border: "none",
            borderRadius: "5px"
        }}>
        {children}
        </button>
    )
}

Bouton.propTypes = {
    couleur: PropTypes.string,
    children: PropTypes.node.isRequired
}