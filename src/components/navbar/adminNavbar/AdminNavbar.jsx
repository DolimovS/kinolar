import "./AdminNavbar.css";
import "../userNavbar/UserNavbar.css";
import { NavLink } from "react-router-dom";
import NavLogo from "../NavLogo";
import IconComponent from "../../Template/Icons";
import { useState } from "react";
import useAppStore from "../../../store/useAppStore";


const AdminNavbar = () => {

    const [darkLight,setDarkLight]=useState(true)
    const { toggleAdminPanel } = useAppStore();

    function handleDarkMode(){
    setDarkLight(!darkLight)
}
    return (
    <nav className="admin_nav">
        <div className="admin_navbar">
            <NavLogo />
            <ul className="nav_links">
                <li className="nav_link">
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive ? "nav_link_span active" : "nav_link_span"
                        }
                    >
                        Dashboard
                    </NavLink>
                </li>
                <li className="nav_link">
                    <NavLink
                        to="/addmovie"
                        className={({ isActive }) =>
                            isActive ? "nav_link_span active" : "nav_link_span"
                        }
                    >
                        Add Movie
                    </NavLink>
                </li>
                <li className="nav_link">
                    <NavLink
                        to="/users"
                        className={({ isActive }) =>
                            isActive ? "nav_link_span active" : "nav_link_span"
                        }
                    >
                        Users
                    </NavLink>
                </li>
                <li className="nav_link">
                    <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                            isActive ? "nav_link_span active" : "nav_link_span"
                        }
                    >
                        Settengs
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
       </nav>
    );
};

export default AdminNavbar;
