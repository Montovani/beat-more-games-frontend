import profileImg from "../assets/Images/profile_image.png"

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
  width:'80px',
  height:'80px'
};
const imageProfileStyle = {
  width:'100%',
  height:'100%',
objectFit: 'cover',
  borderRadius:"200px",
};
const reviewDetailsContainer = {
  display: "flex",
  flexDirection: "column",
  gap:'20px',
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


function LastReviews({userGamesObj}) {
    console.log(userGamesObj)
  return (
        <div style={reviewDetailsContainer}>
            {
            userGamesObj
            .filter((eachGame)=>{
                if(eachGame.gameReview.review){
                    
                return eachGame.gameReview
                }
            })
            .toSorted((a,b)=> new Date(b.gameReview.dateOfReview) - new Date(a.gameReview.dateOfReview) )
            .slice(0,3)
            .map((eachGame)=>{
                return (
                    <div style={{ display: "flex", gap: "8px", alignItems:'center' }}>
                      <div style={imageProfileContainer}>
                        <img style={imageProfileStyle} src={eachGame.gameInfo.image} alt="" />
                      </div>
                      <p>{eachGame.gameReview.review}</p>
                    </div>
                )
            })}
        </div>
  )
}
export default LastReviews
