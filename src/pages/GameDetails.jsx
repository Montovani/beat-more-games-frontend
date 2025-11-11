import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import GameCard from "../components/GameCard";

function GameDetails() {
  const [gameDetails, setGameDetails] = useState(null);
  const [relatedGames, setRelatedGames] = useState(null);
  const { gameId } = useParams();
    const navigate = useNavigate()
  useEffect(() => {
    getGameDetailsApi();
  }, [gameId]);

  const getGameDetailsApi = async () => {
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/games/${gameId}?key=cf1fb41b08d74a758d8a3034a0c3e973`
      );
      console.log(response.data.genres[0].name.toLowerCase());
      setGameDetails(response.data);
      const responseRealtedGames = await axios.get(
        `https://api.rawg.io/api/games?key=cf1fb41b08d74a758d8a3034a0c3e973&genres=${response.data.genres[0].name.toLowerCase()}&page_size=5`
      );
      setRelatedGames(responseRealtedGames.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const mainDivContainerStyle = {};
  const divAllGamesContainer = {
      display:'flex',
      gap: '40px',
      flexWrap: 'wrap',
      marginTop: '50px'
    }
  const heroDivStyle = {
    width: "100%",
    position: "absolute",
    bottom: "6px",
    background: "linear-gradient(to top, rgb(0, 0, 0), transparent)",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: "20px",
    borderRadius: "10px",
  };
  const tagHeroStyle = {
    marginLeft: "10px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#183f39",
    fontSize: "15px",
    marginTop: "8px",
  };
  const ctaButton = {
    marginLeft: "10px",
    padding: "10px",
    backgroundColor: "#be772b",
    border: "none",
  };
  console.log(gameDetails);
  return (
    gameDetails && (
      <div style={mainDivContainerStyle}>
        <section style={{ position: "relative" }}>
          <img
            style={{
              width: "100%",
              borderRadius: "10px",
              maxHeight: "400px",
              objectFit: "cover",
              objectPosition: "top",
            }}
            src={gameDetails.background_image}
            alt=""
          />
          <div style={heroDivStyle}>
            <h1
              style={{
                marginLeft: "15px",
                fontSize: "48px",
                marginBottom: "8px",
                marginTop: "5px",
              }}
            >
              {gameDetails.name}
            </h1>
            <div>
              <button style={tagHeroStyle}>Rating: {gameDetails.rating}</button>
              <button style={tagHeroStyle}>{gameDetails.genres[0].name}</button>
            </div>
            <div style={{ marginRight: "40px" }}>
              <button style={ctaButton}>Wishlist</button>
              <button style={ctaButton}>Finished</button>
            </div>
          </div>
        </section>
        <section className="game-details-section">
          <div style={{ marginBottom: "10px" }}>
            <div>
              <h4>Game Description:</h4>
              <p style={{ maxWidth: "80%" }}>
                {gameDetails.description_raw.slice(0, 400)}...
              </p>
            </div>
            <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
              <div>
                <p>Release Date</p>
                <p>{gameDetails.released}</p>
              </div>
              <div>
                <p>Publishers</p>
                {gameDetails.publishers.map((eachPublisher) => {
                  return (
                    <p style={{ display: "inline" }}>{eachPublisher.name}, </p>
                  );
                })}
              </div>
              <div>
                <p>Platforms</p>
                {gameDetails.platforms.map((eachPlatform) => {
                  return (
                    <p style={{ display: "inline" }}>
                      {eachPlatform.platform.name},{" "}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <h4>Your Review:</h4>
          </div>
        </section>
        <h2>You might also like </h2>
        <div style={divAllGamesContainer}>
        {relatedGames &&
          relatedGames.map((eachGame) => {
            return (
              <div key={eachGame.id} onClick={()=> window.scrollTo({top:0,behavior:'smooth'})}>
                <Link
                  to={`/game-details/${eachGame.slug}/${eachGame.id}`}
                >
                  <GameCard
                    gameName={eachGame.name}
                    gameImg={eachGame.background_image}
                    slug={eachGame.slug}
                    gameApiId={eachGame.id}
                  />
                </Link>
              </div>
            );
          })}
         </div>
      </div>
    )
  );
}

export default GameDetails;
