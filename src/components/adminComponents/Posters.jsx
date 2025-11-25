import Cards from "../Cards"
import "./Posters.css"

const Posters = ({kinoHaqidaMalumotlar}) => {



  // const [kinoHaqidaMalumotlar,setKinoHaqidaMalumotlar]=useState([])

  // const fetchMovies=  async ()=>{
  //     const res= await api.get("/movies")
  //     setKinoHaqidaMalumotlar(res.data)
  //     console.log(res.data);
      
  //   }
  // useEffect(()=>{
  //   fetchMovies()
  
  // },[])


  console.log(kinoHaqidaMalumotlar);
  
  return (
    <div className="posters_container">
        {kinoHaqidaMalumotlar?.map((kino) => (
            <Cards  key={kino._id} id={kino._id} KinoNomi={kino.movie_name}  KinoJanr={kino.janr} KinoImg={kino.imgUrl} />
        ))}
    </div>
  )
}

export default Posters
