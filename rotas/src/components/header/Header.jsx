import { Link } from "react-router-dom";
import css from "./Header.css"

function Header(){
    return(
        <nav>
            <Link to="/sobre">Sobre</Link>
            <Link to="/">Home</Link>
        </nav>
    )
}
export default Header;