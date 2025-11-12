import Button from '@mui/material/Button'
import Search from './Search';
import { useEffect, useState } from 'react';
import axios from 'axios';
import GameCard from './GameCard';
import { Link } from 'react-router-dom';

function AllGamesList() {
    const divAllGamesContainer = {
      display:'flex',
      gap: '40px',
      flexWrap: 'wrap',
      marginTop: '50px'
    }
    const [gamesList, setGamesList] = useState(null)

    useEffect(()=>{
        getAllGamesFromApi()
    },[])
    const getAllGamesFromApi = async () => {

        try {
           const response = await axios.get(`${import.meta.env.VITE_API_GAMES_SERVER_URL}/games?key=${import.meta.env.VITE_API_GAMES_KEY}&page_size=30`)
           
          
           const getOnlyNameAndImage = response.data.results.map((eachGame)=>{
            const game = {name:eachGame.name,image:eachGame.background_image, slug: eachGame.slug, gameApiId:eachGame.id}
            return game
           })
           setGamesList(getOnlyNameAndImage)
           
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{ backgroundColor: "#FF0054", width: "10px", height: "40px" }}
        ></div>
        <h2 style={{ fontSize: "40px", fontFamily: "Poppins" }}>All Games</h2>
      </div>
      <Search />
      <div style={divAllGamesContainer}>
      {gamesList && gamesList.map((eachGame)=>{
       
        return (
        <div key={eachGame.gameApiId}onClick={()=> window.scrollTo({top:0,behavior:'smooth'})}>
        <Link to={`/game-details/${eachGame.slug}/${eachGame.gameApiId}`}>
            <GameCard  gameName={eachGame.name} gameImg={eachGame.image} slug={eachGame.slug} gameApiId={eachGame.gameApiId}/>
        </Link>
        </div>
        )
      })}
      </div>

    </>
  );
}

export default AllGamesList;
