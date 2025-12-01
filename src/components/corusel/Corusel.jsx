import { useState, useEffect } from "react";
import api from "../../utils/axios"; // axios instance
import "./Corusel.css";
import {  useNavigate } from "react-router-dom";

const TeamCarousel = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate=useNavigate()
    // Backenddan ma'lumot olib kelish
    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await api.get("/movies");
                setTeamMembers(res.data);
            } catch (err) {
                console.error("Xatolik:", err);
            }
        }
        fetchProducts();
    }, []);

    const updateCarousel = (newIndex) => {
        if (isAnimating || teamMembers.length === 0) return;
        setIsAnimating(true);
        const total = teamMembers.length;
        const index = (newIndex + total) % total;
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 800);
    };

    // Klaviatura
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") updateCarousel(currentIndex - 1);
            if (e.key === "ArrowRight") updateCarousel(currentIndex + 1);
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex]);

    // Swipe
    useEffect(() => {
        let touchStartX = 0;

        const start = (e) => (touchStartX = e.changedTouches[0].screenX);
        const end = (e) => {
            const diff = touchStartX - e.changedTouches[0].screenX;
            if (Math.abs(diff) > 50)
                diff > 0
                    ? updateCarousel(currentIndex + 1)
                    : updateCarousel(currentIndex - 1);
        };

        document.addEventListener("touchstart", start);
        document.addEventListener("touchend", end);
        return () => {
            document.removeEventListener("touchstart", start);
            document.removeEventListener("touchend", end);
        };
    }, [currentIndex]);

    const getCardClass = (i) => {
        const total = teamMembers.length;
        const offset = (i - currentIndex + total) % total;
        if (offset === 0) return "card center";
        if (offset === 1) return "card right-1";
        if (offset === 2) return "card right-2";
        if (offset === total - 1) return "card left-1";
        if (offset === total - 2) return "card left-2";
        return "card hidden";
    };

    if (teamMembers.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <div className="corusel_container">
            <h1 className="about-title">Yangi kinolar</h1>
            <div className="carousel-container">
                <button
                    className="nav-arrow left"
                    onClick={() => updateCarousel(currentIndex - 1)}
                >
                    ‹
                </button>
                <div className="carousel-track">
                    {teamMembers.map((member, i) => (
                        <div key={i} className={getCardClass(i)}>
                            {/* <NavLink to="#"> */}
                                <img onClick={()=>navigate(`/kinolar/${member._id}`)} src={member.imgUrl} alt={member.name} />
                            {/* </NavLink> */}
                        </div>
                    ))}
                </div>
                <button
                    className="nav-arrow right"
                    onClick={() => updateCarousel(currentIndex + 1)}
                >
                    ›
                </button>
            </div>

            <div className="member-info">
                <hr className="text_liner" />
                <div className="member_text">
                    <h2 className="member-name">{teamMembers[currentIndex].movie_name}</h2>
                    <p className="member-role">{teamMembers[currentIndex].janr}</p>
                </div>
                <hr className="text_liner" />
            </div>

            <div className="dots">
                {teamMembers.map((_, i) => (
                    <div
                        key={i}
                        className={`dot ${i === currentIndex ? "active" : ""}`}
                        onClick={() => updateCarousel(i)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default TeamCarousel;
