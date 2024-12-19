import React, { createContext, useEffect, useState } from 'react'
import  Header  from './composants/containers/Header/Header';
import Footer  from './composants/containers/Footer/Footer';
// import Bouton from './composants/ui/Bouton/Bouton';
import User from './composants/User/User';
import "./index.css";
// import Player from './composants/Player/Player';
// import Routine from './composants/Routine/Routine';
// import Compteur from './composants/containers/Compteur/Compteur';
// import Menu from './composants/containers/Menu/Menu';
import ContactForm from './composants/containers/ContactForm/ContactForm';
import GOT from './composants/User/GOT';



// un composant react
export const UtilisateurContext = createContext();
function App() {
  const user = {
  prenom: "Mariama",
  }

  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => { setTime(new Date()) }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, []);

  const [size, setSize] = useState(0);
  useEffect(() => {
    const handleResize = (e) => {
      setSize(e.target.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return() => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  // const nom = "Mariama";

  // Composant react parametrer
  // function Bouton({ label, couleur }) {
  //   return <button style={{ backgroundColor: couleur }}>{label}</button>
  // }

  // const texte = "I am a paragraph.";

  // const hobbies = ['Dancing', 'Travelling', 'Cooking'];

  // function ajoute() {
  //   alert('Add')
  // }

  // function supprimer() {
  //   alert('Delete')
  // }

  // const user = {
  //   prenom: "Mariama",
  //   nom: "Tunkara",
  //   age: "31",
  //   hobbies: [
  //     { id: 'dancing', nom: "Dancing"},
  //     { id: 'travelling', nom: "Travelling"},
  //     { id: 'cooking', nom: "Cooking"},
        
      
  //   ]
  // }


 


  return (
    <UtilisateurContext.Provider value={user}>
      {/* <h1>{nom}</h1>
      {Bouton({ label: "Valider", couleur: "green"})}
      {Bouton({ label: "Valider", couleur: "red"})} */}

      <div id='container'>
      
         <Header />
         <p className='p-8'>{time.toTimeString()}</p>
         <p className='p-8'>{size}</p>
         <GOT />
         <ContactForm />
         {/* <Bouton couleur={'green'} gereClique={ajoute}>
          <p>Add</p>
         </Bouton>

         <Bouton couleur={'red'} gereClique={supprimer}>
          <p>Delete</p>
         </Bouton> */}

         {/* <User
          firstName="Mariama"
          lastName="Tunkara"
          age={31}
          hobbies={hobbies} /> */}
          {/* <Routine />
          <Compteur />
          <Menu />
      
      
         <Player /> */}

         <User utilisateur={user}>
         </User>
         <Footer />

      </div>
      </UtilisateurContext.Provider>
      

  )
}

export default App;
