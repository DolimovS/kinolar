import { useParams } from "react-router-dom"
import "./OneMovie.css"
import api from "../../utils/axios"
import { useEffect, useState } from "react"
import Inputadd from "../../components/input/Inputadd"


const OneMovie = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [kinoNomi,setKinoNomi]=useState( "")
    const [kinoHaqida,setKinoHaqida]=useState( "")
    const [kinoJanr,setKinoJanr]=useState(" ")
    const [kinoSana,setKinoSana]=useState("")
    const [kinoVideo,setKinoVideo]=useState("")

    console.log(id);
    async function getMovieById(id) {
        try {
            const response = await api.get(`/movies/${id}`)
            console.log("Malumotlar olindi:", response.data);
            setMovie(response.data)
        } catch (err) {
            console.error("Malumotlar olinmadi:", err);
        }
    }
const oneMovieDelete= async()=>{
    try {
        console.log("O'chirildi");
        
        const response= await api.delete(`/movies/${id}`)
        console.log("O'chirildi:",response.data);
        setMovie(null)
    } catch (error) {
        console.error("O'chirishda xato:",error);
    }
    }
    useEffect(() => {
        getMovieById(id)

    }, [id])
    useEffect(() => {
        setKinoNomi(movie?.movie_name || "")
        setKinoHaqida(movie?.discription || "")
        setKinoJanr(movie?.janr || "")
        setKinoSana(movie?.movie_year || "")
        setKinoVideo(movie?.videoUrl || "")
    }, [movie])
    async function handleSubmitUpdate(e){
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("movie_name", kinoNomi);
            formData.append("discription", kinoHaqida);
            formData.append("janr", kinoJanr);
            if (kinoSana) formData.append("movie_year", kinoSana);
            if (kinoVideo) formData.append("videoUrl", kinoVideo);

            const response = await api.put(`/movies/${id}`, formData);
            console.log("Yangilandi:", response.data);
            setMovie(response.data)
        } catch (error) {
            console.error("Yangilashda xato:", error);
        }
    }



    if (!movie) return <h1>Loading...</h1>



    return (
        <div className="one_movie_container">
            <h1>Video yuklash va Yangilash</h1>
            <div className="one_movie_top">
                <div className="text_cards">
                    <div className="text_card_form">
                        <form onSubmit={handleSubmitUpdate} action="">
                            <Inputadd
                                label="Kino nomi"
                                type="text"
                                placeholder={movie.movie_name}
                                value={kinoNomi}
                                onChange={(e) => setKinoNomi(e.target.value)}
                            />
                            <Inputadd
                                label="Kino haqida"
                                placeholder="Kino haqida"
                                type="text"
                                value={kinoHaqida}
                                onChange={(e) => setKinoHaqida(e.target.value)}
                            />
                            <Inputadd
                                label="Janr"
                                placeholder="Janr"
                                type="text"
                                value={kinoJanr}
                                onChange={(e)=>{setKinoJanr(e.target.value
                                )}}
                            />
                            <Inputadd
                                label="Chiqarilgan yili"
                                placeholder="Chiqarilgan yili"
                                type="number"
                                value={kinoSana}
                                onChange={(e)=>{setKinoSana(e.target.value)}}
                            />
                            <Inputadd
                                label="Video fayl"
                                placeholder="Video faylni tanlang"
                                type="file"
                                onChange={(e) => setKinoVideo(e.target.files[0])}
                            />

                            <div className="addbutton">
                                <button type="button">Bekor qilish </button>
                                <button type="submit">Yangilash</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="img_card">
                    <img src={movie?.imgUrl} alt="" />
                </div>

            </div>

            <div className="one_video_delete">
                <button onClick={oneMovieDelete}>O'chirish</button>
            </div>
        </div>
    )
}

export default OneMovie
