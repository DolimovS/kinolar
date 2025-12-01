import "./KinoPlayer.css"
import { useRef, useState } from "react";
import { useParams } from "react-router-dom"
import IconComponent from "../Template/Icons";

const KinoPlayer = () => {
    const videoRef = useRef(null);
    const progressRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);

    // PLAY / PAUSE
    const togglePlay = () => {
        const video = videoRef.current;

        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    // PROGRESS BAR UPDATE
    const handleTimeUpdate = () => {
        const video = videoRef.current;
        const progress = progressRef.current;

        const percent = (video.currentTime / video.duration) * 100;
        progress.value = percent;
    };

    // SEEK VIDEO
    const handleSeek = () => {
        const video = videoRef.current;
        const progress = progressRef.current;

        video.currentTime = (progress.value / 100) * video.duration;
    };

    // VOLUME CHANGE
    const changeVolume = (e) => {
        const vol = e.target.value;
        setVolume(vol);
        videoRef.current.volume = vol;
    };

    // FULLSCREEN
    const handleFullscreen = () => {
        const video = videoRef.current;

        if (video.requestFullscreen) video.requestFullscreen();
    };

    return (

        <div className="video_player_container">
             <div className="video-player">
            <video
                ref={videoRef}
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                onTimeUpdate={handleTimeUpdate}
            ></video>

            {/* Controls */}
            <div className="controls">
                <button className="btn" onClick={togglePlay}>
                    {/* <IconComponent icon={isPlaying ? "" : ""} /> */}
                    {isPlaying ? "⏸" : "▶"}
                </button>

                <input
                    type="range"
                    ref={progressRef}
                    className="progress"
                    defaultValue={0}
                    onChange={handleSeek}
                />

                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={changeVolume}
                    className="volume"
                />

                <button className="btn" onClick={handleFullscreen}>⛶</button>
            </div>
        </div>
        </div>
       
    );
}














// const KinoPlayer = () => {
//     const { id } = useParams()
//     return (
//         <div className="player_container">
//             <div className="video_player_container">

//                 <video controls>
//                     <source src={`https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`} type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//             </div>
//         </div>
//     )
// }

export default KinoPlayer
