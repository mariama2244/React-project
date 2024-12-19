import { use } from "react";
import { useEffect } from "react";
const RECUPERER_PERSOS = "https://thronesapi.com/api/v2/Characters";

async function getPersonnages() {
    // Faire une requette ver un API en HTTP
    const reponse = await fetch(RECUPERER_PERSOS);

    // Transformer le json en donnée javascript
    const data = await reponse.json();
    console.log(data);
    return data;
}

export default function GOT(){
    useEffect(() => {
        getPersonnages()
    }, [])
    return(
        <div>
            <h2>Api Personnage de game of thrones</h2>
        </div>
    )
}

// one tread non blocking
// Thread: process sur la machine qui prend un cor