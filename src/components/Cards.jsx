import "./Cards.css";
import adminbg from "./../assets/img/adminbg.jpg";
import adminbg1 from "./../assets/img/gradient.jpg";
import IconComponent from "./Template/Icons";

const Cards = (({KinoNomi, KinoVaqti, KinoJanr}) => {
    return (
        <div>
            <div className="cards_container">
                <div className="card">
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
                                {/* <div className="circle"></div>
                                <div className="circle" id="right"></div>
                                <div className="circle" id="bottom"></div> */}
                                
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
                                        {KinoVaqti} &nbsp;  &nbsp; 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
});

export default Cards;
