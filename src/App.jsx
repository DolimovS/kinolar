
import "./App.css";
import BackgroundParticles from "../routes/BackgroundParticles";
import useAppStore from "./store/useAppStore";
import AdminNavbar from "./components/navbar/adminNavbar/AdminNavbar";
import UserNavbar from "./components/navbar/userNavbar/UserNavbar";

function App() {
const isOpenAdmin = useAppStore((state) => state.isAdminPanelOpen);


  return (
    <div className="app_container">
      <BackgroundParticles />
      <AdminNavbar/>
      <UserNavbar/>

    </div>
  );
}

export default App;
