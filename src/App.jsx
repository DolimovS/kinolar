

import { Routes, Route, Navigate } from "react-router-dom";
import UserLayout from "./layouts/userLayout/UserLayout";
import AdminLayout from "./layouts/adminLayout/AdminLayout";
import AdminLogin from "./components/adminLogin/AdminLogin";
import useAppStore from "./store/useAppStore";
import BackgroundParticles from "../routes/BackgroundParticles";
import UserNavbar from "./components/navbar/userNavbar/UserNavbar";
import { useEffect } from "react";
import "./App.css"

function App() {
  const { setIsAdmin, isAdmin } = useAppStore();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) setIsAdmin(true);
  }, []);


  return (
    <div>
      <BackgroundParticles />
      <Routes>
        <Route path="/*" element={<UserLayout />} />

        <Route path="/admin-login" element={<AdminLogin />} />

        <Route
          path="/admin/*"
          element={isAdmin ? <AdminLayout /> : <Navigate to="/admin-login" />}
        />
      </Routes>
    </div>
  );
}

export default App;

