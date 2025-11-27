
import SearchInput  from "../../../src/components/searchInput/SearchInput"
import "./Dashboard.css"
import { useDashboardInputStore } from "../../../src/store/useAppStore"
import { useEffect, useState } from "react"
import api from "../../../src/utils/axios"
import Cards from "../../../src/components/Cards"

const Dashboard = () => {
  const searchInput=useDashboardInputStore((state)=>state.text)
  const [reklamaDashboardMovie,setReklamaDashboardMovie]=useState([])
  const [searchDashboardMovie,setSearchDashboardMovie]=useState([])
// malumot olish
  const fetchMoviesDashboard= async()=>{
    const res=await api.get("/movies")
    const movie_beshta=res.data.reverse().slice(0,5)
    setReklamaDashboardMovie(movie_beshta)
    setSearchDashboardMovie(res.data)
  }
  console.log(reklamaDashboardMovie);
  useEffect(()=>{
    fetchMoviesDashboard()
  },[])

  // filtered
  const   filterMovies=searchDashboardMovie.filter((movie=>{
    return movie.movie_name.toLowerCase().includes(searchInput.toLowerCase())
  }))
  console.log(searchDashboardMovie);
  
  console.log(filterMovies);
  



  return (
    <div className="dashboard_container">
      <div className="dashboard_title">
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard_input">
      <SearchInput />
      </div>
      {searchInput}


      <div className="movies_dashboard">
        <div className="movie_sarlavha">
          <h2 className="">Oxirgi filmlar</h2>
        </div>

        <div className="dashboard_slader">
          {reklamaDashboardMovie?.map((kino) => (
            <Cards  key={kino._id} id={kino._id} KinoNomi={kino.movie_name}  KinoJanr={kino.janr} KinoImg={kino.imgUrl} />
        ))}
        </div>
        {/* <Posters kinoHaqidaMalumotlar={reklamaDashboardMovie} /> */}
      </div>
    </div>
  )
}

export default Dashboard