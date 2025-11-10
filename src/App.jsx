import "./App.css";
import NavbarSite from "./components/NavbarSite";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AllGames from "./pages/AllGames";
import Homepage from "./pages/Homepage"

function App() {
  const mainDivStyle = {
      display: 'flex',
      justifyContent: 'flex-start',
      gap:'20px'
  }
  const appContainerStyle = {
        width: '76%',
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
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
