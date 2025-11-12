import { Link } from 'react-router-dom'
import LogoImg from '../assets/Images/beatmoregames_logo.png'
function NavbarSite() {
    const divNavStyle = {
        backgroundColor: '#010409',
        height: '65px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    }
  return (
    <>
        <div style={divNavStyle}>
            <div style={{width:'100px', marginTop:'10px',marginLeft:'15px'}}>
                <Link to='/'>
                <img style={{width:'100%',cursor:'pointer'}} src={LogoImg} alt="" />
                </Link>
            </div>
            <div className='pages-navbar' style={{display:'flex',gap:'20px',marginRight:'15px',marginTop:'2px',fontSize:'18px',fontWeight:'400'}}>
                <Link to ='/all-games'><p>Games To Play</p></Link>
                <p>Your Games</p>
                <p>Games Finished</p>
            </div>   
        </div>
    </>
  )
}

export default NavbarSite
