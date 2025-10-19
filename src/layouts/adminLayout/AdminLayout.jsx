import { Routes, Route } from "react-router-dom";
import AdminNavbar from "../../components/navbar/adminNavbar/AdminNavbar";
import Dashboard from "../../../pages/Admin/dashboard/Dashboard";
import AddMovie from "../../../pages/Admin/addMovie/AddMovie";
import Users from "../../../pages/Admin/users/Users";
import Settings from "../../../pages/Admin/settings/Settings";

import "./AdminLayout.css";

const AdminLayout = () => {
    return (
        <div className="user_container" >
            <div className="user_navbar_app">
                <AdminNavbar />
            </div>
            <div className="nav_pages">
                <Routes>
                    <Route path="/admin/dashboard" element={<Dashboard />} />
                    <Route path="/admin/addmovie" element={<AddMovie />} />
                    <Route path="/admin/users" element={<Users />} />
                    <Route path="/admin/settings" element={<Settings />} />
                </Routes>
            </div>
        </div>
    );
};

export default AdminLayout;
