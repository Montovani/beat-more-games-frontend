import SubtitleH2 from "../components/SubtitleH2"
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <>
    <SubtitleH2 text={"Sorry this page doesn't exist"} color={"#be2323"}/>
    <div>
      <img src="https://i.makeagif.com/media/8-07-2016/e6mNld.gif" alt="" />
    </div>
    <h3>Here are some useful links</h3>
    <div style={{display:'flex', gap:'10px'}}>
      <Link to ='/all-games'><p style={{cursor:'pointer'}}><u>Games to Play</u></p></Link>
      <Link to ='/user/igu'><p style={{cursor:'pointer'}}><u>Your Games</u></p></Link>
    </div>
    </>
  )
}

export default PageNotFound
