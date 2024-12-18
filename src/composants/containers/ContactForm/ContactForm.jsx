import { useState } from "react";
import Bouton from "../../ui/Bouton/Bouton";
export default function ContactForm(){
    //Variable pour stocker les données entrées dans le champs
    const [fullNameInput, setFullNameInput] = useState('Mariama');
    const [fullNameError, setFullNameError] = useState('');

    const [messageInput, setMessageInput] = useState('');
    const [messageError, setMessageError] = useState('');

    const [hobbyInput, setHobbyInput] = useState('');
    const [hobbyError, setHobbyError] = useState('');
    const [hobbies, setHobbies] = useState([]);

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

    function gereHobby(event) {
        setHobbyInput(event.target.value);
    }

    function addHobby() {
        if (!hobbyInput || hobbyInput.split(' ').join('') === '') {
            alert("Le champ hobby ne peut pas être vide ou contenir uniquement des espaces !");
            return;
        }
        setHobbies([...hobbies, hobbyInput]); 
        setHobbyInput(''); 
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

        if (hobbyInput === ""){
            setHobbies('Ajouter le hobbies');
        }
		// Récuperer les données du formulaire
		alert('Contact ' + fullNameInput)
		alert('Contact ' + fullNameInput);
		setFullNameInput('');
        setHobbies([]);
	}
    return(
        <div className="p-4">
            <h2>Contact Nous</h2>
            <p className="text-red-600 text-sm">{fullNameError}</p>
			<textarea
				className="bg-neutral-800 p-2 w-full"
				onChange={gereMessage}
				placeholder="Entrez un message">{messageInput}</textarea>
                 <Bouton gereClique={submit}>Envoyer le message</Bouton>
             <input
                type="text"
                value={hobbyInput}
                onChange={gereHobby}
                placeholder="Ajouter un hobby"
                className="bg-gray-200 p-2 w-full mb-2"
            />   
            <button onClick={addHobby} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
               add hobby
            </button>
            <h3>Liste des hobbies :</h3>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index} className="p-1 border-b">{hobby}</li>
                ))}
            </ul>
			<p>{messageError}</p>
           
        </div>
    )
}