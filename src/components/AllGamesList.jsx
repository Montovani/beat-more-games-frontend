import Button from '@mui/material/Button'
import Search from './Search';
import { useEffect, useState } from 'react';
import axios from 'axios';

function AllGamesList() {
    const [gamesList, setGamesList] = useState(null)

    useEffect(()=>{
        getAllGamesFromApi()
    },[])
    const getAllGamesFromApi = async () => {

        try {
           const response = await axios.get('https://api.rawg.io/api/games?key=cf1fb41b08d74a758d8a3034a0c3e973&page_size=20')
           console.log(response.data.results)
          
           const getOnlyNameAndImage = response.data.results.map((eachGame)=>{
            const game = {name:eachGame.name,image:eachGame.background_image}
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
      {gamesList && gamesList.map((eachGame)=>{
        return <p>{eachGame.name}</p>
      })}

    </>
  );
}

export default AllGamesList;
