import Bouton from "../../ui/Bouton/Bouton";
import { useState } from "react";

export default function Compteur() {
    // Retourne un tableau avec la valeur, un fonction pour changer la valeur
    const [Compteur, changeCompteur] = useState(0);

    function increment(){
        changeCompteur(Compteur + 1);
    }

    function decrement(){
        changeCompteur(Compteur - 1);
    }
    return(
        <div>
            <h2 className="text-x1 text-center">{Compteur}</h2>
            <Bouton gereClique={decrement}>-1</Bouton>
            <Bouton gereClique={increment}>+1</Bouton>
        </div>
    )
}