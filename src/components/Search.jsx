import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import axios from "axios";

function Search({gamesList,setGamesList}) {
  const [search, setSearch] = useState(null)
  const [platform, setPlatform] = useState(null)
  const [genre, setGenre] = useState(null)


  const handleSearchInApi = async()=> {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_GAMES_SERVER_URL}/games?key=${import.meta.env.VITE_API_GAMES_KEY}&search=${search}`)
      
      const getOnlyEssentials = response.data.results.map((eachGame)=>{
            const game = {name:eachGame.name,image:eachGame.background_image, slug: eachGame.slug, gameApiId:eachGame.id}
            return game
    })
    setGamesList(getOnlyEssentials)
    } catch (error) {
      console.log(error)
    }
  }
const handlePlatformChange = async(e)=>{
  try {
     const platformId = e.target.value === 'ps5' ? '187' 
                     : e.target.value === 'nintendo switch' ? '7' 
                     : e.target.value === 'xbox'? '186'
                     : e.target.value === 'pc'? '4'
                     : null

    if (!platformId) return
    
    const response = await axios.get(`${import.meta.env.VITE_API_GAMES_SERVER_URL}/games?key=${import.meta.env.VITE_API_GAMES_KEY}&platforms=${platformId}`)
    const getOnlyEssentials = response.data.results.map((eachGame)=>{
            const game = {name:eachGame.name,image:eachGame.background_image, slug: eachGame.slug, gameApiId:eachGame.id}
            return game
    })
    setGamesList(getOnlyEssentials)

  } catch (error) {
    console.log(error)
  }
}
const handleGenreChange = async(e)=>{
  try {
     const genre = e.target.value
      console.log(genre)
    
    
    const response = await axios.get(`${import.meta.env.VITE_API_GAMES_SERVER_URL}/games?key=${import.meta.env.VITE_API_GAMES_KEY}&genres=${genre}`)
    const getOnlyEssentials = response.data.results.map((eachGame)=>{
            const game = {name:eachGame.name,image:eachGame.background_image, slug: eachGame.slug, gameApiId:eachGame.id}
            return game
    })
    setGamesList(getOnlyEssentials)

  } catch (error) {
    console.log(error)
  }
}
const handlePublishersChange = async(e)=>{
  try {
     const publisher = e.target.value
    const response = await axios.get(`${import.meta.env.VITE_API_GAMES_SERVER_URL}/games?key=${import.meta.env.VITE_API_GAMES_KEY}&publishers=${publisher}`)
    const getOnlyEssentials = response.data.results.map((eachGame)=>{
            const game = {name:eachGame.name,image:eachGame.background_image, slug: eachGame.slug, gameApiId:eachGame.id}
            return game
    })
    setGamesList(getOnlyEssentials)
  } catch (error) {
    console.log(error)
  }
}
  return (
    <>
      <Box
        sx={{
          "& > :not(style)": { m: 1, width:{xs:'50%',sm:'45ch',} },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "#ac2847",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#ac2847",
            },
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
          "& .MuiInputBase-input": {
            color: "white",
          },
        }}
      >
        <TextField
          className="search-input"
          id="filled-basic"
          label="Search Your Game"
          variant="outlined"
          onChange={(e)=> setSearch(e.target.value)}
        />
      </Box>
      <div style={{display:'flex',flexWrap:'wrap',marginTop:'20px'}}>
      <Form.Select className="search-selector" onChange={handlePlatformChange}>
        <option> Platform</option>
        <option value="ps5">PS5</option>
        <option value="Xbox">Xbox</option>
        <option value="pc">PC</option>
        <option value="nintendo switch">Nintendo Switch</option>
      </Form.Select>
      <Form.Select className="search-selector-2" onChange={handleGenreChange}>
        <option> Genre</option>
        <option value="action">Action</option>
        <option value="indie">Indie</option>
        <option value="adventure">Adventure</option>
        <option value="strategy">Strategy</option>
        <option value="shooter">Shooter</option>
        <option value="casual">Casual</option>
        <option value="simulation">Simulation</option>
        <option value="puzzle">Puzzle</option>
      </Form.Select>
      <Form.Select className="search-selector-3" onChange={handlePublishersChange}>
        <option> Publisher</option>
        <option value="electronic-arts">Electronic Arts</option>
        <option value="square-enix">Square Enix</option>
        <option value="ubisoft-entertainment">Ubisoft Entertainment</option>
        <option value="microsoft-studios">Microsoft Studios</option>
        <option value="sega-2">SEGA</option>
        <option value="valve">Valve</option>
        <option value="bethesda-softworks">Bethesda Softworks</option>
        <option value="2k-games">2K Games</option>
        <option value="feral-interactive">Feral Interactive</option>
        <option value="capcom">Capcom</option>
      </Form.Select>
      <Button onClick={handleSearchInApi} className="search-btn" variant="light">Search</Button>
      </div>

    </>
  );
}

export default Search;
