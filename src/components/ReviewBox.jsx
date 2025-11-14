import { useState } from "react";
import profileImg from "../assets/Images/profile_image.png";
import axios from "axios";

const reviewMainContainer = {
  width: "90%",
  height: "90%",
  border: "1px solid #333",
  borderRadius: "20px",
  padding: "15px",
  display: "flex",
  alignItems:'center',
  justifyContent:'center'
};
const imageProfileContainer = {
  width: "80px",
};
const imageProfileStyle = {
  width: "100%",
  borderRadius: "100px",
};
const reviewDetailsContainer = {
  display: "flex",
  flexDirection: "column",
};
const addNewReviewBtn = {
    width:'150px',
    height:'40px',
    alignSelf:'center',
    fontFamily: 'Poppins',
    backgroundColor: '#8D4C08',
    border:'none',
    borderRadius:'15px',
    cursor:'pointer'
}
const reviewEditingContainer = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    gap:'40px'
}
const textAreaReviewStyle = {
    width:'200px',
    height:'130px',
    resize:'none'
}
const pStyle = {};

function ReviewBox(props) {
    console.log(props)
    const [isEditingReview, setIsEditingReview] = useState(false)
    const [newGameReview, setNewGameReview] = useState(null)
    const [localReview, setLocalReview] = useState(props.gameReview)
    const handleAddNewReviewToGameObj = async(e)=> {
        try {
            const newReview = newGameReview
             await axios.patch(`${import.meta.env.VITE_JSON_SERVER_URL}/gamesAddedToList/${props.id}`,{gameReview: {dateOfReview: new Date(),
            review: newReview
             }
             })
             setLocalReview({
                    review: newGameReview,
                    dateOfReview: new Date().toISOString(),
                });
             setIsEditingReview(false)
             setNewGameReview("")
             
        } catch (error) {
            console.log(error)
        }
    }
        console.log(localReview)
    if(!props.gameReview.review && !isEditingReview){
        return <button onClick={()=>setIsEditingReview(true)} style={addNewReviewBtn}>Add a new Review</button>
    }
  return (
    <>
    <div style={reviewMainContainer}>
    {/* {To eddit a new review} */}
    {isEditingReview?(
    <div style={reviewEditingContainer}>
     <label>Write your review:</label>
     <textarea onChange={(e)=>setNewGameReview(e.target.value)} value={newGameReview || ""} style={textAreaReviewStyle}></textarea>
     <button onClick={handleAddNewReviewToGameObj} style={addNewReviewBtn}>Add a new Review</button>
    </div>  
    ):(
      <div style={reviewDetailsContainer}>
        <div style={{ display: "flex", gap: "10px", alignItems:'center' }}>
          <div style={imageProfileContainer}>
            <img style={imageProfileStyle} src={profileImg} alt="" />
          </div>
          <p>Igu</p>
          <p>{localReview.dateOfReview.slice(0,10)}:</p>
        </div>
        <p>
          {localReview.review}
        </p>
         <button onClick={()=>setIsEditingReview(true)} style={addNewReviewBtn}>Add a new Review</button> 
      </div>
        
    )}
    </div>
    </>
  );
}

export default ReviewBox;
