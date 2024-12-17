export default function Player() {

    const score = 25;

    let result;
  if (score >= 25) {
    result = <h3>Vainqueur  avec un score de {score}</h3>;
  } else {
    result = <h3>Perdant avec un score de {score}</h3>;
  }
    return (
        <div>
      <h2>Composant Player</h2>
      {result}
    </div>
    )
}