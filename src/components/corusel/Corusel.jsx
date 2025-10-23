import { useEffect, useState } from "react";
import "./Corusel.css";
import { NavLink } from "react-router-dom";

const TeamCarousel = () => {
    const teamMembers = [
        { name: "Emily Kim", role: "Founder" },
        { name: "Michael Steward", role: "Creative Director" },
        { name: "Emma Rodriguez", role: "Lead Developer" },
        { name: "Julia Gimmel", role: "UX Designer" },
        { name: "Lisa Anderson", role: "Marketing Manager" },
        { name: "James Wilson", role: "Product Manager" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [products, setProducts] = useState([]);

    const updateCarousel = (newIndex) => {
        if (isAnimating) return;
        setIsAnimating(true);

        const total = teamMembers.length;
        const index = (newIndex + total) % total;
        setCurrentIndex(index);

        setTimeout(() => setIsAnimating(false), 800);
    };

    const handleKeyDown = (e) => {
        if (e.key === "ArrowLeft") updateCarousel(currentIndex - 1);
        if (e.key === "ArrowRight") updateCarousel(currentIndex + 1);
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex, isAnimating]);

    // swipe handling
    useEffect(() => {
        let touchStartX = 0;
        let touchEndX = 0;

        const handleTouchStart = (e) => {
            touchStartX = e.changedTouches[0].screenX;
        };

        const handleTouchEnd = (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            const swipeThreshold = 50;
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) updateCarousel(currentIndex + 1);
                else updateCarousel(currentIndex - 1);
            }
        };

        document.addEventListener("touchstart", handleTouchStart);
        document.addEventListener("touchend", handleTouchEnd);
        return () => {
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchend", handleTouchEnd);
        };
    }, [currentIndex]);
    useEffect(() => {
        fetch(
            `https://jsonplaceholder.typicode.com/photos?_limit=${teamMembers.length}`
        )
            .then((item) => item.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error(err));
    }, []);

    const cards = [
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=3687&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=3870&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1655249481446-25d575f1c054?w=900&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3687&auto=format&fit=crop",
    ];

    const getCardClass = (i) => {
        const total = products.length || cards.length;
    };

    return (
        <div className="team-carousel">
            {/* <h1 className="about-title">OUR TEAM</h1> */}

            <div className="carousel-container">
                <button
                    className="nav-arrow left"
                    onClick={() => updateCarousel(currentIndex - 1)}
                >
                    ‹
                </button>


                <div className="carousel-track">
                    {products.map((item, i) => (
                        <div key={item.id} className={getCardClass(i)}>
                            <NavLink to={`/${item.id}`}>
                                <img src={item.url} alt={`Team Member ${i + 1}`} />
                            </NavLink>
                        </div>
                    ))}
                </div>

                {/* <div className="carousel-track">
                    {products.map((item, i) => (
                        <div key={item.id} className={getCardClass(i)}>
                            <NavLink to={`/${item.id}`}>
                                <img src={item.url} alt={`Team Member ${i + 1}`} />
                            </NavLink>
                        </div>
                    ))}
                </div> */}

                <button
                    className="nav-arrow right"
                    onClick={() => updateCarousel(currentIndex + 1)}
                >
                    ›
                </button>
            </div>

            <div className="member-info">
                <h2 className="member-name">{teamMembers[currentIndex].name}</h2>
                {/* <p className="member-role">{teamMembers[currentIndex].role}</p> */}
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
