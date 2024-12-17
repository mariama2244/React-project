import classes from "./Header.module.css";
export default function Header() {
   
    return (
        <header className={classes.container}>
            <h1 className={classes.titre}>Welcome</h1>
            <p className={classes.p}>I will be happy to help you with anything</p>
        </header>
    )
}