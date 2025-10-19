import "./AdminLogin.css"
import { useState } from "react";
import IconComponent from "../Template/Icons";
import useAppStore from "../../store/useAppStore";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const closeAdminPanel = useAppStore((state) => state.closeAdminPanel);
  const setIsAdmin = useAppStore((state) => state.setIsAdmin)
  const navigate = useNavigate();

  // inputlarni tozalash
  const inputClear = () => {
    setEmail("");
    setPassword("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "email@gmail" && password === "12345") {
      localStorage.setItem("adminToken", "tokentest");
      setIsAdmin(true);
      alert("Tizimga Admin sifatida kirdingiz");
      inputClear();
      navigate("/admin");
    } else {
      alert("Email yoki password xato");
      inputClear();
    }
  };

  const handleClose = () => {
    closeAdminPanel(); // store funksiyasi bilan panelni yopadi
    inputClear();
    navigate("/");      // user sahifaga yo'naltiradi
  }

  return (
    <div className="admin_container">
      <form onSubmit={handleSubmit} className="admin_form">
        <h1>Log In</h1>
        <div className="admin_input">
          <label htmlFor="admin_email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="admin_email"
            required
          />
        </div>
        <div className="admin_input">
          <label htmlFor="admin_password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={hidePassword ? "password" : "text"}
            id="admin_password"
            required
          />
          <button type="button" className="handle_hide_text" onClick={() => setHidePassword(!hidePassword)}>
            {hidePassword ? "Show" : "Hide"} password
          </button>
        </div>
        <div className="adminbtn">
          <button type="button" onClick={handleClose}>Close</button>
          <button className="admin_button" type="submit">
            <span><IconComponent name="strelka_chap" /></span>
            <p className="admin_button_text">Submit</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
