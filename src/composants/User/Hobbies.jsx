export default function Hobbies() {
  const hobbiesFromDB= [
    {
      id: "12345",
      nom: "Cooking"
    },

    {
      id: "2469",
      nom: "Dancing"
    }, 

    {
      id: "12567345",
      nom: "Travelling"
    }
  ];
  return (
    <ul>
      {hobbiesFromDB.map((hobby) => {
        return (
          <li 
          key={hobby.id}
          style={{
          padding: "10px",
          border: "1px solid blue",
          margin: "0.5em"
        }}> 
          {hobby.nom}
        </li>)
      })}
    </ul>
  )
}

 

  
