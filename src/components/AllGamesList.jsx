import Button from '@mui/material/Button'
import Search from './Search';
function AllGamesList() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{ backgroundColor: "#FF0054", width: "10px", height: "40px" }}
        ></div>
        <h2 style={{ fontSize: "40px", fontFamily: "Poppins" }}>All Games</h2>
      </div>
      <Search />
    </>
  );
}

export default AllGamesList;
