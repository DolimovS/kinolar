
import "./App.css";
import BackgroundParticles from "../routes/BackgroundParticles";
import AdminLayout from "./layouts/adminLayout/AdminLayout";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="app_container">
      <BackgroundParticles />
      {/* <AdminLayout/> */}
      <Navbar/>


    </div>
  );
}

export default App;
