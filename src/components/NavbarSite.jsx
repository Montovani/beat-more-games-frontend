import LogoImg from '../assets/Images/beatmoregames_logo.png'

function NavbarSite() {
    const divNavStyle = {
        backgroundColor: '#171717',
        height: '65px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    }
  return (
    <>
        <div style={divNavStyle}>
            <div style={{width:'100px', marginTop:'10px',marginLeft:'15px'}}>
                <img style={{width:'100%'}} src={LogoImg} alt="" />
            </div>
            <div className='pages-navbar' style={{display:'flex',gap:'20px',marginRight:'15px',marginTop:'2px',fontSize:'18px',fontWeight:'400'}}>
                <p>Games To Play</p>
                <p>Your Games</p>
                <p>Games Finished</p>
            </div>   
        </div>
    </>
  )
}

export default NavbarSite
