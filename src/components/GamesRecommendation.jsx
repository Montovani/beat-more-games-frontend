import axios from "axios"
import { useEffect, useState } from "react"

function GamesRecommendation() {
    const [gameUserInfo, setGameUserInfo] = useState(null)

    useEffect(()=>{
        getUserData()
    },[])

   const getUserData = async() => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_JSON_SERVER_URL}/gamesAddedToList`)
            setGameUserInfo(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    gameUserInfo
  return (
    <div>GamesRecommendation</div>
  )
}

export default GamesRecommendation
