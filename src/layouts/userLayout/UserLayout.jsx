import { Route, Router, Routes } from "react-router-dom"
import UserNavbar from "../../components/navbar/userNavbar/UserNavbar"
import Kinolar from "../../../pages/User/kinolar/kinolar"
import Premreyalar from "../../../pages/User/premreyalar/Premreyalar"
import Janrlar from "../../../pages/User/janrlar/Janrlar"
import Contact from "../../../pages/User/contact/Contact"
import KinoPlayer from "../../components/kinoPlayer/KinoPlayer"


import "./UserLayout.css"
const UserLayout = () => {
  return (
    <div className="user_container" >
      <div className="user_navbar_app">
        <UserNavbar/>
      </div>
        <div className="nav_pages">
            <Routes>
              <Route path="/" element={<Kinolar/>} />
              <Route path="/kinolar" element={<Kinolar/>} />
              <Route path="/premreyalar" element={<Premreyalar/>} />
              <Route path="/janrlar" element={<Janrlar/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/kinolar/:id" element={<KinoPlayer/>} />
            </Routes>
        </div>

    </div>
  )
}

export default UserLayout