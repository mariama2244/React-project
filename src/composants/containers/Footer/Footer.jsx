import Bouton from "../../ui/Bouton/Bouton";

export default function Footer() {
    function contact(alert) {
        alert(contact)
    }
    return (
        <footer>
            <h5>footer links</h5>
            <p>  copyright 2024 - Made with ❤️ by</p>
            <Bouton couleur='blue' gereClique={contact}>
                <p>Contact</p>
            </Bouton>
        </footer>
    )
}

