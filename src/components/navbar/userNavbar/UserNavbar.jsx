import NavLogo from "../NavLogo";
import "./UserNavbar.css";
import { NavLink } from "react-router-dom";
import IconComponent from "../../Template/Icons";
import { useState } from "react";
import useAppStore from "../../../store/useAppStore";
const UserNavbar = () => {
        const [darkLight,setDarkLight]=useState(true)
    const { toggleAdminPanel } = useAppStore();

    function handleDarkMode(){
    setDarkLight(!darkLight)
}

    return (
        <div className="user_nav">
            <div className="user_navbar">
            <NavLogo />
            <ul className="nav_links">
                <li className="nav_link">
                    <NavLink
                        to="/kinolar"
                        className={({ isActive }) =>
                            isActive ? "nav_link_span active" : "nav_link_span"
                        }
                    >
                        Kinolar
                    </NavLink>
                </li>
                <li className="nav_link">
                    <NavLink
                        to="/premreyalar"
                        className={({ isActive }) =>
                            isActive ? "nav_link_span active" : "nav_link_span"
                        }
                    >
                        Premreyalar
                    </NavLink>
                </li>
                <li className="nav_link">
                    <NavLink
                        to="/janrlar"
                        className={({ isActive }) =>
                            isActive ? "nav_link_span active" : "nav_link_span"
                        }
                    >
                        Janrlar
                    </NavLink>
                </li>
                <li className="nav_link">
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "nav_link_span active" : "nav_link_span"
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
            <div className="nav_contact">
                <button type="button" onClick={handleDarkMode}>
                    <IconComponent name={darkLight ? "sun" : "oy"} />
                </button>
                <button type="button" onClick={toggleAdminPanel}>
                    <IconComponent name="admin" />
                </button>
            </div>
        </div>
        </div>
    )
}

export default UserNavbar