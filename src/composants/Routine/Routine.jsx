export default function Routine() {

    const eat = () => alert("You have to eat !");
    const sleep = () => alert("Sleeping time !");
    const study = () => alert("Did you study today !");
    return(
        <div>
       <button onClick={eat}>Manger</button>
       <button onClick={sleep}>Dormir</button>
       <button onClick={study}>Étudier</button>
    
        </div>
    )
}