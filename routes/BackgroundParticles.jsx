import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const BackgroundParticles = () => {
    const [init, setInit] = useState(false);
    const [colors, setColors] = useState({
        background: "#000000",
        particle: "#ffffff",
    });

    // 🎨 CSS root ranglarini olish
    const getRootColors = () => {
        const rootStyles = getComputedStyle(document.documentElement);
        return {
            background: rootStyles.getPropertyValue("--background-color").trim() || "#000000",
            particle: rootStyles.getPropertyValue("--particle-color").trim() || "#ffffff",
        };
    };

    // 🌀 theme o‘zgarganda ranglarni yangilash
    useEffect(() => {
        const updateColors = () => {
            setColors(getRootColors());
        };

        updateColors();

        const observer = new MutationObserver(updateColors);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["data-theme"],
        });

        return () => observer.disconnect();
    }, []);

    // tsParticles engine ni yuklash
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log("Particles loaded:", container);
    };

    // 🌈 Dynamic ranglar asosida konfiguratsiya
    const particlesOptions = {
        autoPlay: true,
        background: {
            color: { value: colors.background },
            opacity: 1,
        },
        detectRetina: true,
        fpsLimit: 150,
        fullScreen: { enable: true, zIndex: 0 },
        interactivity: {
            detectsOn: "window",
            events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: { enable: true, delay: 2 },
            },
            modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
            },
        },
        particles: {
            color: {
                value: colors.particle,
                animation: {
                    h: { enable: true, speed: 40, sync: true },
                },
            },
            links: {
                color: colors.particle,
                distance: 100,
                enable: true,
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 3,
                direction: "none",
                outModes: { default: "out" },
            },
            number: {
                density: { enable: true, width: 1920, height: 1080 },
                value: 70,
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
    };

    return (
        <>
            {init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={particlesOptions}
                />
            )}
        </>
    );
};

export default BackgroundParticles;
