import { useEffect, useState } from "react"
import SubtitleH2 from "../components/SubtitleH2"
import axios from "axios"
import { PacmanLoader } from "react-spinners"
import { Link } from "react-router-dom";
import GameCard from "../components/GameCard";

const divLoadingApiStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "500px",
};

function TopGamesCurrentYear() {
    const [gamesTopYear,setGamesTopYear] = useState(null)

    useEffect(()=>{
        getApiData()
    },[])


 const getApiData = async ()=>{
     try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_GAMES_SERVER_URL}/games?key=${
          import.meta.env.VITE_API_GAMES_KEY
        }&ordering=-rating&page_size=40`
      );
      setGamesTopYear(response.data.results);
    } catch (error) {
      console.log(error);
    }
 }
 if(!gamesTopYear){
    return (
          <div style={divLoadingApiStyle}>
            <PacmanLoader
              size={18}
              color={"#bc1283"}
              speedMultiplier={0.8}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <p>Loading</p>
          </div>
        )
 }
 console.log(gamesTopYear)
  return (
    <>
    <SubtitleH2 text={"Top Games"} color={"#F7D007"} fontSize={32}>
    </SubtitleH2>
    <div className="div-all-games-container">
        {gamesTopYear.map((eachGame) => {
          return (
            <div
              key={eachGame.id}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Link to={`/game-details/${eachGame.slug}/${eachGame.id}`}>
                <GameCard
                  gameName={eachGame.name}
                  gameImg={eachGame.background_image}
                  slug={eachGame.slug}
                  gameApiId={eachGame.id}
                  width={"150"}
                  height={"200"}
                  fontSize={"26"}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default TopGamesCurrentYear
