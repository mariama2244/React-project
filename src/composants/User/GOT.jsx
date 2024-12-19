import { use, useState } from "react";
import { useEffect } from "react";
const RECUPERER_PERSOS = "https://thronesapi.com/api/v2/Characters";

async function getPersonnages() {
    // Faire une requette ver un API en HTTP
    const reponse = await fetch(RECUPERER_PERSOS);

    // Transformer le json en donnée javascript
    try {
        const data = await reponse.json();
    console.log(data);
    return data;
    }catch (e) {
        console.log(e);
        return []
    }
}

export default function GOT(){
    const [persos, setPersos] = useState([]);
    useEffect(() => {
        getPersonnages().then((personnages) => {
            setPersos(personnages)
        })
    }, [])

     return(
        <div>
            <h2>Personnages de Game of thrones</h2>
            {
                persos.map((personnage) => {
                    return(
                        <div key={personnage.id} className="border p-4 flex flex-col m-2">
                            <h3 className="text">{personnage.fullName}</h3>
                            <img src={personnage.imageUrl} />
                            <p>{personnage.title}</p>
                        </div>
                    )
                })
            }
        </div>
     )
}

// one tread non blocking
// Thread: process sur la machine qui prend un cor
const monFetch = (url, time) => {

    const maPromse = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("OK:" + url);
      }, time);
    })
  
    return maPromse
  }
  
  monFetch("/5000", 5000).then((data) => {
    console.log(data);
  })
  
  monFetch("/2000", 2000).then((data) => {
    console.log(data);
  })