import { useState } from "react";
import Bouton from "../../ui/Bouton/Bouton";
export default function ContactForm(){
    //Variable pour stocker les données entrées dans le champs
    const [fullNameInput, setFullNameInput] = useState('Mariama');
    const [fullNameError, setFullNameError] = useState('');

    const [messageInput, setMessageInput] = useState('');
    const [messageError, setMessageError] = useState('');

    function gereFullName(event){
        //Recuperer l'entrée de l'utilisateur
        const valeur = event.target.value; 
        // Stocker la valeur de l'input dans la variable d'etat
        setFullNameInput(valeur);
        setFullNameError('');

    }

    function gereMessage(e) {
		setMessageInput(e.target.value);
		setMessageError('');
	}

    
	function submit() {
		if (fullNameInput === "") {
			setFullNameError('Nom et prénom obligatoire !');
			return
		}
		if (messageInput === "" || messageInput > 500) {
			setMessageError('Message Obligatoire ! (Max: 500)')
			return
		}
		// Récuperer les données du formulaire
		alert('Contact ' + fullNameInput)
		alert('Contact ' + fullNameInput);
		setFullNameInput('');
	}
    return(
        <div className="p-4">
            <h2>Contact Nous</h2>
            <p className="text-red-600 text-sm">{fullNameError}</p>
			<textarea
				className="bg-neutral-800 p-2 w-full"
				onChange={gereMessage}
				placeholder="Entrez un message">{messageInput}</textarea>
			<p>{messageError}</p>
            <Bouton gereClique={submit}>Envoyer le message</Bouton>
        </div>
    )
}