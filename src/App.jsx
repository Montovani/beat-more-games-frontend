import "./App.css";
import NavbarSite from "./components/NavbarSite";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AllGames from "./pages/AllGames";
import Homepage from "./pages/Homepage"
import GameDetails from "./pages/GameDetails";

function App() {
  const mainDivStyle = {
      display: 'flex',
      justifyContent: 'flex-start',
      gap:'20px'
  }
  const appContainerStyle = {
        width: '50%',
        margin: '30px auto',
    }
  return (
    <>
      <NavbarSite />
      <div style={mainDivStyle}>
        <Sidebar />
        <div style={appContainerStyle}>
          <Routes>
              <Route path="/" element={<Homepage/>}></Route>
              <Route path="/all-games" element={<AllGames />}></Route>
              <Route path="/all-games" element={<AllGames />}></Route>
              <Route path='/game-details/:gameSlug/:gameId' element={<GameDetails />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
