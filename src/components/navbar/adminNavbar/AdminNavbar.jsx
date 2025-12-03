import "./AdminNavbar.css";
import "../userNavbar/UserNavbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import NavLogo from "../NavLogo";
import IconComponent from "../../Template/Icons";
import { useEffect, useState } from "react";

const AdminNavbar = () => {
    const navigate = useNavigate();

    // 👉 Faqat bitta state yetadi
    const [isMobile, setIsMobile] = useState(false);

    // 👉 Window size listener
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 750);
        };

        handleResize(); // birinchi yuklanganda

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function deleteToken() {
        localStorage.removeItem("adminToken");
        navigate("/");
        alert("Token tozalandi");
    }

    return (
        <nav className="admin_nav">
            <div className="admin_navbar">
                <div className="admin_navbar_top">
                    <NavLogo />

                    {/* DESKTOP MENU */}
                    {!isMobile && (
                        <ul className="nav_links">
                            <li className="nav_link">
                                <NavLink
                                    to="/admin/dashboard"
                                    className={({ isActive }) =>
                                        isActive ? "nav_link_span active" : "nav_link_span"
                                    }>
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="nav_link">
                                <NavLink
                                    to="/admin/addmovie"
                                    className={({ isActive }) =>
                                        isActive ? "nav_link_span active" : "nav_link_span"
                                    }>
                                    Add Movie
                                </NavLink>
                            </li>
                            <li className="nav_link">
                                <NavLink
                                    to="/admin/users"
                                    className={({ isActive }) =>
                                        isActive ? "nav_link_span active" : "nav_link_span"
                                    }>
                                    Users
                                </NavLink>
                            </li>
                            <li className="nav_link">
                                <NavLink
                                    to="/admin/settings"
                                    className={({ isActive }) =>
                                        isActive ? "nav_link_span active" : "nav_link_span"
                                    }>
                                    Settings
                                </NavLink>
                            </li>
                        </ul>
                    )}

                    <div className="nav_contact">
                        <button type="button" onClick={deleteToken}>
                            <IconComponent name="logoutadmin" />
                        </button>
                    </div>
                </div>

                {/* MOBILE MENU */}
                {isMobile && (
                    <ul className="nav_links nav_links_button">
                        <li className="nav_link">
                            <NavLink
                                to="/admin/dashboard"
                                className={({ isActive }) =>
                                    isActive ? "nav_link_span active" : "nav_link_span"
                                }>
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="nav_link">
                            <NavLink
                                to="/admin/addmovie"
                                className={({ isActive }) =>
                                    isActive ? "nav_link_span active" : "nav_link_span"
                                }>
                                Add Movie
                            </NavLink>
                        </li>
                        <li className="nav_link">
                            <NavLink
                                to="/admin/users"
                                className={({ isActive }) =>
                                    isActive ? "nav_link_span active" : "nav_link_span"
                                }>
                                Users
                            </NavLink>
                        </li>
                        <li className="nav_link">
                            <NavLink
                                to="/admin/settings"
                                className={({ isActive }) =>
                                    isActive ? "nav_link_span active" : "nav_link_span"
                                }>
                                Settings
                            </NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default AdminNavbar;
