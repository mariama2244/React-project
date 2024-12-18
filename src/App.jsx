import React, { useState } from 'react'
import  Header  from './composants/containers/Header/Header';
import Footer  from './composants/containers/Footer/Footer';
import Bouton from './composants/ui/Bouton/Bouton';
import User from './composants/User/User';
import "./index.css";
import Player from './composants/Player/Player';



// un composant react
function App() {

  // const nom = "Mariama";

  // Composant react parametrer
  // function Bouton({ label, couleur }) {
  //   return <button style={{ backgroundColor: couleur }}>{label}</button>
  // }

  // const texte = "I am a paragraph.";

  const hobbies = ['Dancing', 'Travelling', 'Cooking'];

 


  return (
    <>
      {/* <h1>{nom}</h1>
      {Bouton({ label: "Valider", couleur: "green"})}
      {Bouton({ label: "Valider", couleur: "red"})} */}

      <div>
         <Header />
         <Bouton couleur={'green'}>
          <p>Add</p>
         </Bouton>

         <Bouton couleur={'red'}>
          <p>Delete</p>
         </Bouton>

         <User
          firstName="Mariama"
          lastName="Tunkara"
          age={31}
          hobbies={hobbies} />
         <Footer />
         <Player />

      </div>
      
    </>
  )
}

export default App
