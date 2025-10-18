import { useState } from "react";
import IconComponent from "../../components/Template/Icons";
import "./AdminLayout.css";
const AdminLayout = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if(email=="email@gmail" && password=="12345"){

      console.log(email+ password);
    }
    

    // handle login logic here
  };
const [hidePassword,setHidePassword]=useState(true)
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")


function hideBtn(){
  setHidePassword(!hidePassword)
}

  return (
    <div className="admin_container">
      <form onSubmit={handleSubmit} className="admin_form">
        <h1>Log In</h1>
        <div className="admin_input">
          <label htmlFor="admin_email">Email</label>
          <input 
          value={email} 
          onChange={(e)=>setEmail(e.target.value)}
          type="email" 
          name="email" 
          id="admin_email" 
          required />
        </div>
        <div className="admin_input">
          <label htmlFor="admin_password">Password</label>
          <input 
          value={password} 
          onChange={(e)=>setPassword(e.target.value)}
          type={hidePassword ?"password": "text"} 
          name="password" 
          id="admin_password" 
          required /> 
          
          <button className="handle_hide_text" type="button" onClick={hideBtn}>
            {hidePassword ? "Show" :"Hide"} password</button>
        </div>
        <button className="admin_button" type="submit">
          <span><IconComponent name="strelka_chap"/></span>
          <p className="admin_button_text">Summit</p>
        </button>
      </form>
    </div>
  );
};

export default AdminLayout;
