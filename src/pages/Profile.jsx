import { useEffect, useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import SubtitleH2 from "../components/SubtitleH2";
import axios from "axios";
import GameCard from "../components/GameCard";
import { Link } from "react-router-dom";

function Profile() {
  const [gamesFinishedThisYear, setGamesFinishedThisYear] = useState(null);
  const [userGamesObj, setUserGamesObj] = useState(null);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_JSON_SERVER_URL}/gamesAddedToList`
      );
      setUserGamesObj(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const firstGamerStatusContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };
  const GamesFinihedThisYearContainer = {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    width: "80%",
  };

  const lastReviewsContainer = {
    width: "50%",
  };
  const gameDashboardContainer = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "5px",
  };
  const gameListContainer = {
    border: "1px solid #333",
    backgroundColor: "#0D1117",
    borderRadius: "20px",
    width: "320px",
    minHeight: "600px",
    padding: "5px",
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
  };

  return (
    <>
      <ProfileHeader />
      <div style={firstGamerStatusContainer}>
        <div style={{ width: "50%" }}>
          <div>
            <SubtitleH2
              text={"Games Finished This Year"}
              color={"#FF0054"}
              fontSize={32}
            ></SubtitleH2>
          </div>
          <div style={GamesFinihedThisYearContainer}>
            {userGamesObj &&
              userGamesObj
                .filter((eachGame) => {
                  return eachGame.gameStatus === "finished";
                })
                .map((eachGame) => {
                  return (
                    <Link
                      to={`/game-details/${eachGame.gameInfo.slug}/${eachGame.idGameApi}`}
                    >
                      <GameCard
                        key={eachGame.id}
                        gameName={eachGame.gameInfo.name}
                        gameImg={eachGame.gameInfo.image}
                        slug={eachGame.slug}
                        gameApiId={eachGame.gameApiId}
                        width={"130"}
                        height={"140"}
                        fontSize={"20"}
                      />
                    </Link>
                  );
                })}
          </div>
        </div>
        <div style={lastReviewsContainer}>
          <SubtitleH2 text={"Last Reviews"} color={"#d72dbd"} fontSize={32} />
        </div>
      </div>
      <SubtitleH2 text={"Games Dashboard"} color={"#50ab22"} fontSize={32} />
      <div style={gameDashboardContainer}>
        <div>
          <h2 style={{ textAlign: "center" }}>Wishlist</h2>
          <div style={gameListContainer}>
            {userGamesObj &&
              userGamesObj
                .filter((eachGame) => {
                  return eachGame.gameStatus === "wishlist";
                })
                .map((eachGame) => {
                  return (
                    <div
                      key={eachGame.id}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      <Link
                        to={`/game-details/${eachGame.gameInfo.slug}/${eachGame.idGameApi}`}
                      >
                        <GameCard
                          gameName={eachGame.gameInfo.name}
                          gameImg={eachGame.gameInfo.image}
                          slug={eachGame.slug}
                          gameApiId={eachGame.gameApiId}
                          width={"130"}
                          height={"120"}
                          fontSize={"19"}
                        />
                      </Link>
                    </div>
                  );
                })}
          </div>
        </div>
        <div>
          <h2 style={{ textAlign: "center" }}>Playing</h2>
          <div style={gameListContainer}>
            {userGamesObj &&
              userGamesObj
                .filter((eachGame) => {
                  return eachGame.gameStatus === "playing";
                })
                .map((eachGame) => {
                  return (
                    <div
                      key={eachGame.id}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      <Link
                        to={`/game-details/${eachGame.gameInfo.slug}/${eachGame.idGameApi}`}
                      >
                        <GameCard
                          key={eachGame.id}
                          gameName={eachGame.gameInfo.name}
                          gameImg={eachGame.gameInfo.image}
                          slug={eachGame.slug}
                          gameApiId={eachGame.gameApiId}
                          width={"130"}
                          height={"120"}
                          fontSize={"19"}
                        />
                      </Link>
                    </div>
                  );
                })}
          </div>
        </div>
        <div>
          <h2 style={{ textAlign: "center" }}>Finished</h2>
          <div style={gameListContainer}>
            {userGamesObj &&
              userGamesObj
                .filter((eachGame) => {
                  return eachGame.gameStatus === "finished";
                })
                .map((eachGame) => {
                  return (
                    <div
                      key={eachGame.id}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      <Link
                        to={`/game-details/${eachGame.gameInfo.slug}/${eachGame.idGameApi}`}
                      >
                        <GameCard
                          key={eachGame.id}
                          gameName={eachGame.gameInfo.name}
                          gameImg={eachGame.gameInfo.image}
                          slug={eachGame.slug}
                          gameApiId={eachGame.gameApiId}
                          width={"130"}
                          height={"120"}
                          fontSize={"19"}
                        />
                      </Link>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
