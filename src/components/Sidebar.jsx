import { Link } from "react-router-dom";
import LogoImg from "../assets/Images/beatmoregames_logo.png";

function Sidebar() {
  const styleDivSidebar = {
    backgroundColor: "#0f141b",
    borderRight: "1px solid #333",
    width: "200px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };
  return (
    <div className="sidebar-container-style">
      <div className="menu-elements">
        <Link to ='/all-games'>
        <p style={{ paddingLeft: "40px", fontSize: "25px", fontWeight: "800", cursor: 'pointer' }}>
          Home
        </p>
        </Link>

        <ul className="list-sidebar">
          <p>Dashboard</p>
          <Link to='/user/igu'>
          <li>Profile</li>
          </Link>
          {/* <li>Games Finished</li>
          <li>Wishlist</li>
          <li>Recommended Games</li> */}
        </ul>
        <ul className="list-sidebar">
          <Link to ='/top-games-this-year'><p style={{cursor:'pointer'}}>Top Games</p></Link>
        </ul>
      </div>
      <div className="footer-sidebar">
        <img style={{ width: "38%" }} src={LogoImg} alt="" />
        <p>About us</p>
        <p>Github Project</p>
      </div>
    </div>
  );
}

export default Sidebar;
