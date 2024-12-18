import React, { useState } from 'react'
import  Header  from './composants/containers/Header/Header';
import Footer  from './composants/containers/Footer/Footer';
import Bouton from './composants/ui/Bouton/Bouton';
import User from './composants/User/User';
import "./index.css";
import Player from './composants/Player/Player';
import Routine from './composants/Routine/Routine';
import Compteur from './composants/containers/Compteur/Compteur';
import Menu from './composants/containers/Menu/Menu';
import ContactForm from './composants/containers/ContactForm/ContactForm';



// un composant react
function App() {

  // const nom = "Mariama";

  // Composant react parametrer
  // function Bouton({ label, couleur }) {
  //   return <button style={{ backgroundColor: couleur }}>{label}</button>
  // }

  // const texte = "I am a paragraph.";

  const hobbies = ['Dancing', 'Travelling', 'Cooking'];

  function ajoute() {
    alert('Add')
  }

  function supprimer() {
    alert('Delete')
  }


 


  return (
    <>
      {/* <h1>{nom}</h1>
      {Bouton({ label: "Valider", couleur: "green"})}
      {Bouton({ label: "Valider", couleur: "red"})} */}

      <div>
         <Header />
         <ContactForm />
         <Bouton couleur={'green'} gereClique={ajoute}>
          <p>Add</p>
         </Bouton>

         <Bouton couleur={'red'} gereClique={supprimer}>
          <p>Delete</p>
         </Bouton>

         <User
          firstName="Mariama"
          lastName="Tunkara"
          age={31}
          hobbies={hobbies} />
          <Routine />
          <Compteur />
          <Menu />
      
         <Footer />
         <Player />

      </div>
      
    </>
  )
}

export default App
