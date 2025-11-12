import axios from "axios"
import { useState } from "react"

function PopUpAddGame({setIsAskingToAdd, gameDetails}) {
    const [gameStatus,setGameStatus] = useState(null)
    const [gameReview,setGameReview] = useState(null)
  

    const handleGameStatusChange = (e)=>{
        const status = e.target.value
        setGameStatus(status)
        
    }
    const handleGameReviewChange = (e)=>{
        const review = e.target.value
        setGameReview(review)
    }
    const handleAddGameToDashboard = (e)=>{
        e.preventDefault()
        const gameObj = {
            idGameApi: gameDetails.id,
            gameStatus: gameStatus,
            gameReview: {
                dateOfReview: new Date(),
                review: gameReview
            },
            hoursPlayed: null,
            startedDate: null,
            finishedDate: null,
            platformPlayed: null,
            gameInfo: {
                name: gameDetails.name,
                genre: gameDetails.genres[0].name,
                image: gameDetails.background_image,
                slug: gameDetails.slug,
            },
            isAddedToDashboard: true
        
        }
        axios.post(`${import.meta.env.VITE_JSON_SERVER_URL}/gamesAddedToList`,gameObj)
        .then(()=>{
            console.log('game created')
            setGameReview(null)
            setGameStatus(null)
            setIsAskingToAdd(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        background: "#000000e1",
        zIndex: "9999",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "500px",
            height: "280px",
            backgroundColor: "#080918",
            borderRadius: "10px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "10px",
            position: "relative",
          }}
        >
          <button
            onClick={()=> setIsAskingToAdd(false)}
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            X
          </button>
          <h4 style={{ textAlign: "center" }}>Add Game To Your List:</h4>
          <form>
            <div>
              <label>Select Game Status </label>
              <select onChange={handleGameStatusChange} value={gameStatus}>
                <option value="-">-</option>
                <option value="wishlist">Wishlist</option>
                <option value="playing">Playing</option>
                <option value="finished">Finished</option>
              </select>
            </div>
            <div>
              <label>Game Review</label>
              <div>
                <textarea
                onChange={handleGameReviewChange}
                  style={{ width: "400px", height: "100px" }}
                  name="gameReview"
                  value={gameReview}
                  // disabled={true}
                ></textarea>
              </div>
            </div>
            <button
            onClick={handleAddGameToDashboard}
              style={{
                backgroundColor: "#741047",
                border: "none",
                fontSize: "20px",
                borderRadius: "10px",
                padding: "5px",
                fontFamily: "Poppins",
                cursor: "pointer",
              }}
            >
              Add Game
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopUpAddGame;
