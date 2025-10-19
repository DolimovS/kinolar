import { useState } from "react";
import IconComponent from "../../components/Template/Icons";
import "./AdminLayout.css";
import useAppStore from "../../store/useAppStore";

const AdminLayout = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isAdminPanelOpen = useAppStore((state) => state.isAdminPanelOpen);
  const closeAdminPanel = useAppStore((state) => state.closeAdminPanel);
  const setIsAdmin =useAppStore((state)=>state.setIsAdmin)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "email@gmail" && password === "12345") {
      setIsAdmin(true)
      closeAdminPanel()
      alert("Tizimga Admin sifatida kirdinggiz")
    }
    else{
      alert("email yoki password xato")
    }
  };

  return (
    <div className={`admin_container ${isAdminPanelOpen ? "open" : "close"}`}>
      <form onSubmit={handleSubmit} className="admin_form">
        <h1>Log In</h1>
        <div className="admin_input">
          <label htmlFor="admin_email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
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
            name="password"
            id="admin_password"
            required
          />

          <button className="handle_hide_text" type="button" onClick={() => setHidePassword(!hidePassword)}>
            {hidePassword ? "Show" : "Hide"} password
          </button>
        </div>

        <div className="adminbtn">
          <button type="button" onClick={closeAdminPanel}>Close</button>
          <button className="admin_button" type="submit">
            <span><IconComponent name="strelka_chap" /></span>
            <p className="admin_button_text">Submit</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminLayout;
