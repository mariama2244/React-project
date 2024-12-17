const win_score = 100

export default function Player() {

    const score = 500;
    const estGagnant = score >= win_score
    return (
        <section style={{ padding: "0.7em", border: "1px solid while"}}>
            <h2>Player score</h2>
            <p style={{ color: estGagnant ? "pink" : "red"}}></p>
        </section>
    )


  }
    