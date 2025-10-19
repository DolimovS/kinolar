import NavLogo from "../NavLogo";
import { NavLink, useNavigate } from "react-router-dom";
import IconComponent from "../../Template/Icons";
import { useState } from "react";
import useAppStore from "../../../store/useAppStore";
import "../adminNavbar/AdminNavbar.css"
const UserNavbar = () => {
    const [darkLight, setDarkLight] = useState(true);
    const { toggleAdminPanel, setIsAdmin } = useAppStore();
    const navigate = useNavigate();

    function handleDarkMode() {
        setDarkLight(!darkLight);
    }

    function handleAdminClick() {
        const token = localStorage.getItem("adminToken");
        if (token) {
            // Token mavjud bo‘lsa → admin panel ochilsin
            setIsAdmin(true);
            toggleAdminPanel();
            navigate("/admin"); // dashboardga yo‘naltirish
        } else {
            // Token yo‘q → login sahifasiga
            navigate("/admin-login");
        }
    }

    return (
        <div className="user_nav">
            <div className="user_navbar">
                <NavLogo />
                <ul className="nav_links">
                    <li className="nav_link">
                        <NavLink to="/kinolar" className={({ isActive }) => (isActive ? "nav_link_span active" : "nav_link_span")}>
                            Kinolar
                        </NavLink>
                    </li>
                    <li className="nav_link">
                        <NavLink to="/premreyalar" className={({ isActive }) => (isActive ? "nav_link_span active" : "nav_link_span")}>
                            Premreyalar
                        </NavLink>
                    </li>
                    <li className="nav_link">
                        <NavLink to="/janrlar" className={({ isActive }) => (isActive ? "nav_link_span active" : "nav_link_span")}>
                            Janrlar
                        </NavLink>
                    </li>
                    <li className="nav_link">
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav_link_span active" : "nav_link_span")}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div className="nav_contact">
                    <button type="button" onClick={handleDarkMode}>
                        <IconComponent name={darkLight ? "sun" : "oy"} />
                    </button>
                    <button type="button" onClick={handleAdminClick}>
                        <IconComponent name="admin" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserNavbar;
