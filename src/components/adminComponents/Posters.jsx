import Cards from "../Cards"
import "./Posters.css"

const Posters = ({kinoHaqidaMalumotlar}) => {



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
