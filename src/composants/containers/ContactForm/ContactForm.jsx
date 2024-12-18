import { useState } from "react";
import Bouton from "../../ui/Bouton/Bouton";
export default function ContactForm(){
    //Variable pour stocker les données entrées dans le champs
    const [fullNameInput, setFullNameInput] = useState('');

    function gereFullName(event){
        //Recuperer l'entrée de l'utilisateur
        const valeur = event.target.value; 
        // Stocker la valeur de l'input dans la variable d'etat
        setFullNameInput(valeur);

    }

    function submit(){
        //Recuperer les données du foemulaire
        alert('Contact' + fullNameInput)
    }
    return(
        <div className="p-4">
            <h2>Contact Nous</h2>
            <input
            onChange={gereFullName}
            className="bg-neutral-800 p-2 w-full"
            type="text"
            placeholder="Nom et Prenom" />
            <Bouton gereClique={submit}>Envoyer le message</Bouton>
        </div>
    )
}