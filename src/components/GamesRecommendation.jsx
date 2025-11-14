import axios from "axios";
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import SubtitleH2 from "./SubtitleH2";
import { Link } from "react-router-dom";
import GameCard from "./GameCard";


const divLoadingApiStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "500px",
};

const divRecommendedGames = {
    display:'flex',
    gap:'5px',

}
function GamesRecommendation() {
  const [gameUserInfo, setGameUserInfo] = useState(null);
  const [recommendedGames, setRecommendedGames] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);
  useEffect(() => {

    if (!gameUserInfo) return
    getRecommendedGamesFromApi()
    
  }, [gameUserInfo]);

  const userGenres = gameUserInfo
    ? [...new Set(gameUserInfo.map((eachGame) => eachGame.gameInfo.genre))]
    : [];
  console.log(userGenres);

  const getRecommendedGamesFromApi = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_GAMES_SERVER_URL}/games?key=${
          import.meta.env.VITE_API_GAMES_KEY
        }&genres=${userGenres
          .map((g) => g.toLowerCase())
          .join(",")}&ordering=-rating&page_size=8`
      );
      setRecommendedGames(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const getUserData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_JSON_SERVER_URL}/gamesAddedToList`
      );
      setGameUserInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(recommendedGames);
  if (!gameUserInfo || recommendedGames.length === 0) {
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
    );
  }
  return (
    <>
      <SubtitleH2 text={"Games Recommendation"} color={"#F7D007"} fontSize={32}>
      </SubtitleH2>
      <p>Games based in the Genres yous play!</p>
      <div className="div-all-games-container">
        {recommendedGames.map((eachGame) => {
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
  );
}

export default GamesRecommendation;
