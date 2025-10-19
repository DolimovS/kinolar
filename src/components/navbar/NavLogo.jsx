import "./NavLogo.css"
import { NavLink } from "react-router-dom"
const NavLogo = () => {
    return (
        <h1>
            <NavLink to="/" >
                <span>Samandar</span>
            </NavLink>
        </h1>
    )
}

export default NavLogo