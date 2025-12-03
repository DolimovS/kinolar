import NavLogo from "../NavLogo";
import { NavLink, useNavigate } from "react-router-dom";
import IconComponent from "../../Template/Icons";
import { useState, useEffect } from "react";
import useAppStore from "../../../store/useAppStore";
import "../adminNavbar/AdminNavbar.css";

const UserNavbar = () => {
    const { toggleAdminPanel, setIsAdmin } = useAppStore();
    const navigate = useNavigate();

    const [windowWidth, setWindowWidth] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth < 750);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function handleAdminClick() {
        const token = localStorage.getItem("adminToken");
        if (token) {
            setIsAdmin(true);
            toggleAdminPanel();
            navigate("/admin");
        } else {
            navigate("/admin-login");
        }
    }

    return (
        <nav className="admin_nav">
            <div className="admin_navbar">

                <div className="admin_navbar_top">
                    <NavLogo />

                    {/* Desktop menu */}
                    {!windowWidth && (
                        <ul className="nav_links">
                            <li className="nav_link">
                                <NavLink
                                    to="/kinolar"
                                    className={({ isActive }) =>
                                        isActive ? "nav_link_span active" : "nav_link_span"
                                    }>
                                    Kinolar
                                </NavLink>
                            </li>
                            <li className="nav_link">
                                <NavLink
                                    to="/premreyalar"
                                    className={({ isActive }) =>
                                        isActive ? "nav_link_span active" : "nav_link_span"
                                    }>
                                    Premreyalar
                                </NavLink>
                            </li>
                            <li className="nav_link">
                                <NavLink
                                    to="/janrlar"
                                    className={({ isActive }) =>
                                        isActive ? "nav_link_span active" : "nav_link_span"
                                    }>
                                    Janrlar
                                </NavLink>
                            </li>
                            <li className="nav_link">
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive ? "nav_link_span active" : "nav_link_span"
                                    }>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    )}

                    <div className="nav_contact">
                        <button type="button" onClick={handleAdminClick}>
                            <IconComponent name="admin" />
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {windowWidth && (
                    <ul className="nav_links nav_links_button">
                        <li className="nav_link">
                            <NavLink
                                to="/kinolar"
                                className={({ isActive }) =>
                                    isActive ? "nav_link_span active" : "nav_link_span"
                                }>
                                Kinolar
                            </NavLink>
                        </li>
                        <li className="nav_link">
                            <NavLink
                                to="/premreyalar"
                                className={({ isActive }) =>
                                    isActive ? "nav_link_span active" : "nav_link_span"
                                }>
                                Premreyalar
                            </NavLink>
                        </li>
                        <li className="nav_link">
                            <NavLink
                                to="/janrlar"
                                className={({ isActive }) =>
                                    isActive ? "nav_link_span active" : "nav_link_span"
                                }>
                                Janrlar
                            </NavLink>
                        </li>
                        <li className="nav_link">
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? "nav_link_span active" : "nav_link_span"
                                }>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default UserNavbar;



// import NavLogo from "../NavLogo";
// import { NavLink, useNavigate } from "react-router-dom";
// import IconComponent from "../../Template/Icons";
// import { useState, useEffect } from "react";
// import useAppStore from "../../../store/useAppStore";
// import "../adminNavbar/AdminNavbar.css";

// const UserNavbar = () => {
//     const { toggleAdminPanel, setIsAdmin } = useAppStore();
//     const navigate = useNavigate();

//     const [isMobile, setIsMobile] = useState(false);
//     const [menuOpen, setMenuOpen] = useState(false);

//     function handleAdminClick() {
//         const token = localStorage.getItem("adminToken");
//         if (token) {
//             setIsAdmin(true);
//             toggleAdminPanel();
//             navigate("/admin");
//         } else {
//             navigate("/admin-login");
//         }
//     }

//     function handleMenuToggle() {
//         setMenuOpen(!menuOpen);
//     }

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < 750);
//         };

//         handleResize(); 
//         window.addEventListener("resize", handleResize);

//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     const navItems = (
//         <>
//             <li className="nav_link">
//                 <NavLink to="/kinolar" className={({ isActive }) => isActive ? "nav_link_span active" : "nav_link_span"}>
//                     Kinolar
//                 </NavLink>
//             </li>
//             <li className="nav_link">
//                 <NavLink to="/premreyalar" className={({ isActive }) => isActive ? "nav_link_span active" : "nav_link_span"}>
//                     Premreyalar
//                 </NavLink>
//             </li>
//             <li className="nav_link">
//                 <NavLink to="/janrlar" className={({ isActive }) => isActive ? "nav_link_span active" : "nav_link_span"}>
//                     Janrlar
//                 </NavLink>
//             </li>
//             <li className="nav_link">
//                 <NavLink to="/contact" className={({ isActive }) => isActive ? "nav_link_span active" : "nav_link_span"}>
//                     Contact
//                 </NavLink>
//             </li>
//         </>
//     );

//     return (
//         <div className="user_nav">
//             <div className="user_navbar">
//                 <div className="user_navbar_top">
//                     <NavLogo />

//                     {/* DESKTOP MENU */}
//                     {!isMobile && (
//                         <ul className="nav_links">
//                             {navItems}
//                         </ul>
//                     )}

//                     <div className="nav_contact">
//                         {/* ADMIN BUTTON */}
//                         <button type="button" onClick={handleAdminClick}>
//                             <IconComponent name="admin" />
//                         </button>

//                         {/* MOBILE BURGER ICON */}
//                         {isMobile && (
//                             <button className="burger_btn" onClick={handleMenuToggle}>
//                                 <IconComponent name={menuOpen ? "close" : "menu"} />
//                             </button>
//                         )}
//                     </div>
//                 </div>

//                 {/* MOBILE DROPDOWN MENU */}
//                 {isMobile && menuOpen && (
//                     <ul className="nav_links nav_links_button mobile_menu">
//                         {navItems}
//                     </ul>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default UserNavbar;
