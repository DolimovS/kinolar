import "./Cards.css";
import adminbg from "./../assets/img/adminbg.jpg";
import { useNavigate } from "react-router-dom";
const Cards = ({ id, KinoNomi, KinoJanr, KinoImg }) => {
    const navigate=useNavigate()
    return (
        <div  onClick={() => navigate(`/admin/addmovie/${id}`)} className="card_container">
            <div className="card_img">
                <div className="card_janr">
                    <p>{KinoJanr && KinoJanr.length > 15
                        ? `${KinoJanr.slice(0, 15)}...`
                        : KinoJanr || ''}</p>
                </div>
                <img src={KinoImg ? KinoImg : adminbg} alt="" />
            </div>
            <div className="cards_text">
                <p>
                    {KinoNomi && KinoNomi.length > 15
                        ? `${KinoNomi.slice(0, 15)}...`
                        : KinoNomi || ""}
                </p>

            </div>
        </div>
    
    );
};

export default Cards;
