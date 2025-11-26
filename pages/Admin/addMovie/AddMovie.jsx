import "./AddMovie.css";
import Inputadd from "../../../src/components/input/Inputadd";
import { useState ,useEffect} from "react";
import Posters from "../../../src/components/adminComponents/Posters";
import api from "../../../src/utils/axios"
import ToastifyComponent from "../../../src/utils/ToastifyComponent";
// import { ToastContainer,toast } from "react-toastify";


const AddMovie = () => {
  const [kinoNomi, setKinoNomi] = useState("");
  const [kinoHaqida, setKinoHaqida] = useState("");
  const [kinoJanr, setKinoJanr] = useState("");
  const [kinoSana, setKinoSana] = useState("");
  const [kinoRasm, setKinoRasm] = useState("");
  const [kinoHaqidaMalumotlar,setKinoHaqidaMalumotlar]=useState([])
  const [toastOptions,setToastOptions]=useState({open:false})



  // yangilash funksiyasi
  async function handleSubmit(e) {
    e.preventDefault();
    try { 
      
      const formData = new FormData();
      formData.append("movie_name", kinoNomi);
      formData.append("discription", kinoHaqida);
      formData.append("janr", kinoJanr);
      if (kinoSana) formData.append("movie_year", kinoSana);
      if (kinoRasm) formData.append("imgUrl", kinoRasm);

      console.log(kinoRasm);
      
      const response = await api.post("/movies", formData);
      console.log("Yuborildi:", response.data);

      await fetchMovies()
      inputValueClear()
      showSuccess()
      
    } catch (error) {
      console.error("Yuborishda xato:", error);
    }
  }
    // /toastify
   const showSuccess=()=>{
    setToastOptions({
      open:true,
      text:"Kino muvaffaqiyatli qo'shildi!",
      type:"success"
    })
  }
  const deletenotify=()=>{
    setToastOptions({
      open:true,
      text:"Kino yuklash bekor qilindi!",
      type:"error"
    })
  }

// toastyify tugashi uchun
  function inputValueClear() {
    setKinoNomi("");
    setKinoHaqida("");
    setKinoJanr("");
    setKinoSana("");
    setKinoRasm("");
    deletenotify()
  }
// malumotlarni olish
  const fetchMovies =  async ()=>{
      const res= await api.get("/movies")
      setKinoHaqidaMalumotlar(res.data)
      console.log(res.data);
      
    }
    // componentDidMount
  useEffect(()=>{
    fetchMovies()
  },[])



 

  return (
    <div className="addname_container">
      <form action="" className="add_kino_form" onSubmit={handleSubmit}>
        <Inputadd
          label="Kino nomi"
          placeholder="Kino nomi"
          type="text"
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
          onChange={(e) => setKinoJanr(e.target.value)}
        />
        {/* <Inputadd
          label="Davomiyligi"
          placeholder="Davomiyligi"
          type="text"
          value={kinoVaqti}
          onChange={(e) => setKinoVaqti(e.target.value)}
        /> */}
        <Inputadd
          label="Chiqarilgan yili"
          placeholder="Chiqarilgan yili"
          type="number"
          value={kinoSana}
          onChange={(e) => setKinoSana(e.target.value)}
        />

        <Inputadd
          label="Rasm"
          placeholder="Rasm "
          type="file"
          // value={kinoRasm}
          onChange={(e) => setKinoRasm(e.target.files[0])}
        />
        <div className="form_btn">
          <button onClick={() => inputValueClear()}className="noselect" type="button">
            <span className="text">Bekor qilish</span>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
              </svg>
            </span>
          </button>

          <button className="button_next" type="submit">
            <span className="text">Qo'shish</span>
            <svg
              className="arrow"
              viewBox="0 0 448 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
            </svg>
          </button>
        </div>
      </form>
      <ToastifyComponent toastOptions={toastOptions}/>

      <Posters kinoHaqidaMalumotlar={kinoHaqidaMalumotlar} />
    </div>
  );
};

export default AddMovie;
