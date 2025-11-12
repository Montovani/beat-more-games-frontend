function ProfileHeader() {
     const profileContainer = {
        display:'flex',
        gap:'20px',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }
    const gamerStatusContainer = {
        display:'flex',
        gap:'20px',
        flexWrap:'wrap'
    }
    const imageProfileContainer = {
        width:'150px',
        
    }
    const imageProfileStyle = {
        width:'100%',
        borderRadius: '100px'
    }
    const profileCardStyle = {
        display:'flex',
        gap: '30px'
    }
    const nameProfileStyle = {
        fontSize:'50px',
        margin: '0'
    }
  return (
    <div style={profileContainer}>
        <div>
            <div style={profileCardStyle}>
                <div style={imageProfileContainer}>
                    <img style={imageProfileStyle} src="../src/assets/images/profile_image.png" alt="" />
                </div>
                <div>
                    <h2 style={nameProfileStyle}>Igu</h2>
                    <p> <em>Just a regular gamer who likes RTS</em></p>
                </div>
            </div>
        </div>
        <div>
            <div style={gamerStatusContainer}>
                <div>
                    <p>Platforms</p>
                    <div>PS5</div>
                </div>
                <div>
                    <p>Genres</p>
                    <p>Action, RTS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileHeader
