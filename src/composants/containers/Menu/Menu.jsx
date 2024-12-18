import { useState } from "react"
export default function Menu(){
    const [isMenuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
      };
    return(
        <div style={{ position: 'relative', display: 'inline-block' }}>
      <button onClick={toggleMenu} style={{
          padding: '10px 15px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}>
        {isMenuVisible ? 'Fermer le menu' : 'Afficher le menu'}
      </button>

      {isMenuVisible && (
        <ul style={{ listStyleType: 'none', marginTop: '10px', padding: 0 }}>
          <li>nourire le chien</li>
          <li>faire mes devoir</li>
          <li>essayer des trucs en React</li>
        </ul>
      )}
    </div>
    )
}