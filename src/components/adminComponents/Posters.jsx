import Cards from "../Cards"
import "./Posters.css"
const Posters = () => {
    const kinoHaqidaMalumotlar = JSON.parse(
        localStorage.getItem("kinoHaqidaMalumotlar") || "[]"
      );
  return (
    <div className="posters_container">
      
        {kinoHaqidaMalumotlar.map((kino, index) => (
            <Cards key={index} KinoNomi={kino.nomi}  KinoJanr={kino.janr} />
        ))}
    </div>
  )
}

export default Posters
