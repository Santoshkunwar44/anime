import { useEffect, useState } from "react";
import "./App.css";
import AnimeCard from "./components/anime_card/AnimeCard";
import axios from "axios";

function App() {
  const [animeArr, setAnimeArr] = useState([]);
  useEffect(() => {
    fetched();
  }, []);
  const fetched = async () => {
    try {
      const response = await axios.get("https://animes5.p.rapidapi.com/", {
        headers: {
          "X-RapidAPI-Key":
            "1c7d76d54amshac26e1a130c7cb0p19fcb8jsn01938cb59bcb",
        },
      });
      // console.log(response.data.animes);
      setAnimeArr(response.data.animes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="app_container">
        <div className="header">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/itachi-uchiha.png"
            alt="itachi-uchiha"
          />
          <h1>Anime</h1>
        </div>
        <div className="card_container">
          {animeArr.map((item) => {
            return <AnimeCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
