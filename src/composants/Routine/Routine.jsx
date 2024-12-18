export default function Routine() {

    const eat = () => alert("You have to eat !");
    const sleep = () => alert("Sleeping time !");
    const study = () => alert("Did you study today !");
    return(
        <div>
       <button onClick={eat} style={{padding: '10px 20px', margin: '5px', cursor: 'pointer', backgroundColor: 'pink'}}>Manger</button>
       <button onClick={sleep} style={{padding: '10px 20px', margin: '5px', cursor: 'pointer', backgroundColor: 'pink'}}>Dormir</button>
       <button onClick={study} style={{padding: '10px 20px', margin: '5px', cursor: 'pointer', backgroundColor: 'pink'}}>Étudier</button>
    
        </div>
    )
}