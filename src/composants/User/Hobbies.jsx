import { useContext, useState } from "react"
import { UtilisateurContext } from "../../../App"
import PropTypes from "prop-types"
import Bouton from '../../ui/Bouton/Bouton'

export default function Hobbies() {
  // const hobbiesFromDB= [
  //   {
  //     id: "12345",
  //     nom: "Cooking"
  //   },

  //   {
  //     id: "2469",
  //     nom: "Dancing"
  //   }, 

  //   {
  //     id: "12567345",
  //     nom: "Travelling"
  //   }
  // ];
  const user = useContext(UtilisateurContext);

  
  const [hobbyInput, setHobbyInput] = useState('')
  const [hobbyError, setHobbyError] = useState('')
  const [newHobbies, setNewHobbies] = useState(user.hobbies);

  function gereHobbyInput(e) {
    setHobbyInput(e.target.value);
    setHobbyError("");
  }

  function ajouteHobby() {
    if (hobbyInput === "") {
      setHobbyError('Nom du hobby obligatoire !')
      return
    }
    setNewHobbies([...newHobbies, { id: 'test', nom: hobbyInput }]);
  }

  return (
    <div>
      <input type="text" onChange={gereHobbyInput} />
      <p>{hobbyError}</p>
      <Bouton gereClique={ajouteHobby}>Ajouter</Bouton>
      <ul>
        {newHobbies.map((hobby) => {
          return (
            <li
              key={hobby.id}
              style={{
                padding: "10px",
                border: "1px solid white",
                margin: "0.5em"
              }}>
              {hobby.nom}
            </li>)
        })}
      </ul>
    </div>

  )
  }
  Hobbies.propTypes = {
    hobbies: PropTypes.array.isRequired,
  }


 

  
