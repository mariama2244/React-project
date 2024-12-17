import React, { useState } from 'react'
import  Header  from './composants/containers/Header/Header';
import Footer  from './composants/containers/Footer/Footer';
import Bouton from './composants/ui/Bouton/Bouton';
import './App.css'


// un composant react
function App() {

  // const nom = "Mariama";

  // Composant react parametrer
  // function Bouton({ label, couleur }) {
  //   return <button style={{ backgroundColor: couleur }}>{label}</button>
  // }

  const texte = "I am a paragraph.";



  return (
    <>
      {/* <h1>{nom}</h1>
      {Bouton({ label: "Valider", couleur: "green"})}
      {Bouton({ label: "Valider", couleur: "red"})} */}

      <div>
         <Header />
         <Footer />
         <Bouton />

      </div>
      
    </>
  )
}

export default App
