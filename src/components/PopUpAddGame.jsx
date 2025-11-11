function PopUpAddGame({setIsAskingToAdd}) {
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
              <select>
                <option value="wishlist">Wishlist</option>
                <option value="playing">Playing</option>
                <option value="finished">Finished</option>
              </select>
            </div>
            <div>
              <label>Game Review</label>
              <div>
                <textarea
                  style={{ width: "400px", height: "100px" }}
                  name=""
                  id=""
                ></textarea>
              </div>
            </div>
            <button
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
