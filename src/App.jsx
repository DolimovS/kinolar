

import { Routes, Route, Navigate } from "react-router-dom";
import UserLayout from "./layouts/userLayout/UserLayout";
import AdminLayout from "./layouts/adminLayout/AdminLayout";
import AdminLogin from "./components/adminLogin/AdminLogin";
import useAppStore from "./store/useAppStore";
import BackgroundParticles from "../routes/BackgroundParticles";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const { setIsAdmin, isAdmin } = useAppStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) setIsAdmin(true);
    setLoading(false);
  }, [setIsAdmin]);

  if (loading) return <div>Loading...</div>;

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
