import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav_container">
      <div className="nav">
        <h1>
          <NavLink to="/" >
            <span>Samandar</span>
          </NavLink>
        </h1>
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
          <p>G</p>
          <p>G</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
