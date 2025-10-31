import "./Cards.css";
import adminbg from "./../assets/img/adminbg.jpg";
import adminbg1 from "./../assets/img/gradient.jpg";
import IconComponent from "./Template/Icons";
import { NavLink } from "react-router-dom";

const Cards = ({ id, KinoNomi, KinoJanr }) => {
    return (
        <NavLink > <div  className="card_container">
            <div className="card_img">
                <div className="card_janr">
                    <p>{KinoJanr}</p>
                </div>
                <img src={adminbg} alt="" />
            </div>
            <div className="cards_text">
            <p>
                {KinoNomi && KinoNomi.length > 15
                    ? `${KinoNomi.slice(0, 15)}...`
                    : KinoNomi || ""}
            </p>

            </div>

            {/* <div className="cards_container" >
                <div className="card" key={id}>
                    <div className="content">
                        <div className="back">
                            <div
                                className="back-content"
                                style={{
                                    backgroundImage: `url(${adminbg})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                }}
                            >
                                <strong><IconComponent name="eye"/></strong>
                            </div>
                        </div>
                        <div className="front">
                            <div className="img" 
                            style={{
                                    backgroundImage: `url(${adminbg1})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                }}
                            >
                                
                                
                            </div>

                            <div className="front-content">
                                <small className="badge">{KinoJanr}</small>
                                <div className="description">
                                    <div className="title">
                                        <p className="title">
                                            {KinoNomi}
                                        </p>
                                    </div>
                                    <p className="card-footer">
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   */}
        </div>
        </NavLink>
    );
};

export default Cards;
