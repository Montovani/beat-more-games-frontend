import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import GameCard from "../components/GameCard";
import PopUpAddGame from "../components/PopUpAddGame";
import { PacmanLoader } from "react-spinners";
import ReviewBox from "../components/ReviewBox";

function GameDetails() {
  const [gameDetails, setGameDetails] = useState(null);
  const [relatedGames, setRelatedGames] = useState(null);
  const [gameInfoFromList, setGameInfoFromList] = useState(null)
  const { gameId } = useParams();
  const [isAddedToList, setIsAddedToList] = useState(false);
  const [isAskingToAdd, setIsAskingToAdd] = useState(false);
  const [gameStatus, setGameStatus] = useState(null)
  useEffect(() => {
    getAllData();
  }, [gameId, isAddedToList]);

  const getAllData = async ()=>{
    await getGameDetailsApi()
    await getGameDetailsServer()
  }

  const getGameDetailsServer = async()=>{
    try {
      const responseGameInTheList = await axios.get(`${import.meta.env.VITE_JSON_SERVER_URL}/gamesAddedToList?idGameApi=${gameId}`)
      setIsAddedToList(responseGameInTheList.data[0].isAddedToDashboard)
      setGameInfoFromList(responseGameInTheList.data[0])
      setGameStatus(responseGameInTheList.data[0].gameStatus) // Maybe remove this state because we already get 
      console.log('got the game in the list: ',responseGameInTheList)
    } catch (error) {
      console.log(error)
    } 
  }

  const getGameDetailsApi = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_GAMES_SERVER_URL}/games/${gameId}?key=${import.meta.env.VITE_API_GAMES_KEY}`
      );
      setGameDetails(response.data);
      const responseRealtedGames = await axios.get(
        `${import.meta.env.VITE_API_GAMES_SERVER_URL}/games?key=${import.meta.env.VITE_API_GAMES_KEY}&genres=${response.data.genres[0].name.toLowerCase()}&page_size=5`
      );
      setRelatedGames(responseRealtedGames.data.results);
      
      
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddToListBtn = () => {
    setIsAskingToAdd(true);
  };
  const mainDivContainerStyle = {};
  const divAllGamesContainer = {
    display: "flex",
    gap: "40px",
    flexWrap: "wrap",
    marginTop: "50px",
  };
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
    backgroundColor: "#be2b37",
    border: "none",
    borderRadius: "10px",
    fontFamily: "Poppins",
    cursor: "pointer",
  };
  const addNewReviewBtn = {
    width:'150px',
    height:'40px',
    alignSelf:'center',
    fontFamily: 'Poppins',
    backgroundColor: '#8D4C08',
    border:'none',
    borderRadius:'15px',
    cursor:'pointer'
}

  const handleRemoveGame = async()=>{
    console.log('clicked')
    console.log(gameInfoFromList.id)
    try {
      const request = await axios.delete(`${import.meta.env.VITE_JSON_SERVER_URL}/gamesAddedToList/${gameInfoFromList.id}`)
      setIsAddedToList(false)
      setGameInfoFromList(null)
      setGameStatus(null)

      console.log('game deleted')
    } catch (error) {
      console.log(error)
    }
  }
  const divLoadingApiStyle = {
  display:'flex',
  flexDirection: 'column',
  alignItems:'center',
  justifyContent:'center',
  width:'500px'
}

  const handleGameStatusChange = async(e)=>{
    setGameStatus(e.target.value)
    try {
      await axios.patch(`${import.meta.env.VITE_JSON_SERVER_URL}/gamesAddedToList/${gameInfoFromList.id}`,{gameStatus: e.target.value})
    } catch (error) {
      console.log(error)
    }
  }

  if (!gameDetails) {
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
  return (
    <div>
      {/* -- PopUp To Add to List -- */}
      {isAskingToAdd && (
        <PopUpAddGame setIsAskingToAdd={setIsAskingToAdd} gameDetails={gameDetails} setIsAddedToList={setIsAddedToList}/>
      )}
      {/* ---- Main Content ---- */}
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
              {isAddedToList? (
                <>
                <label>Game Status</label>
                <select onChange={handleGameStatusChange} value={gameStatus}>
                <option value="wishlist">Wishlist</option>
                <option value="playing">Playing</option>
                <option value="finished">Finished</option>
                </select>
                <button onClick={handleRemoveGame}>Delete Game From List</button>
                </>
                
                ): (<button onClick={handleAddToListBtn} style={ctaButton}>
                Add Game to Dashboard
              </button>)}
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
                    <p key={eachPublisher.id} style={{ display: "inline" }}>
                      {eachPublisher.name},{" "}
                    </p>
                  );
                })}
              </div>
              <div>
                <p>Platforms</p>
                {gameDetails.platforms.map((eachPlatform) => {
                  return (
                    <p
                      key={eachPlatform.platform.id}
                      style={{ display: "inline" }}
                    >
                      {eachPlatform.platform.name},{" "}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="your-review-container">
            <h4>Your Review:</h4>
            {isAddedToList && gameInfoFromList?(
              <ReviewBox {...gameInfoFromList} getGameDetailsServer={getGameDetailsServer} />
            ):(
              <button onClick={handleAddToListBtn} style={addNewReviewBtn}>Add a new Review</button>
            )}
          </div>
        </section>
        <h2>You might also like </h2>
        <div className="div-all-games-container">
          {relatedGames &&
            relatedGames.map((eachGame) => {
              return (
                <div
                  key={eachGame.id}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  }
                >
                  <Link to={`/game-details/${eachGame.slug}/${eachGame.id}`}>
                    <GameCard
                      gameName={eachGame.name}
                      gameImg={eachGame.background_image}
                      slug={eachGame.slug}
                      gameApiId={eachGame.id}
                      width={'250'} 
                      height={'300'}
                      fontSize={'26'}
                    />
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default GameDetails;
