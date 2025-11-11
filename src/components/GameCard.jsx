
function GameCard({gameName,gameImg}) {
    
    const divCardStyle = {
        position: 'relative',
        width: '250px',
        height: '300px',
        backgroundColor: 'black',
        borderRadius: '20px',
        overflow: 'hidden',
        transition: 'transform 0.4s ease'
    }
    const cardImgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }
    const cardH4Style = {
        position:'absolute',
        bottom: '-35px',
        fontSize: '26px',
        padding: '8px',
        width:'100%',
        background: 'linear-gradient(to top, rgb(0, 0, 0), transparent)',
        fontWeight: '900'
        
    }
  return (
    <div className="card-style" style={divCardStyle}>
        <div style={cardImgStyle}>
            <img style={cardImgStyle} src={gameImg} alt="" />
        </div>
        <div>
            <h4 style={cardH4Style}>{gameName}</h4>
        </div>
    </div>
  )
}

export default GameCard
