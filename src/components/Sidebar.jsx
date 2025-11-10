
function Sidebar() {
    const styleDivSidebar = {
        backgroundColor: '#1E1E1E',
        borderRight: '1px solid #333',
        width: '200px',
        height: '100vh',
        display:'flex',
        flexDirection:'column'

    }
  return (
    <div style={styleDivSidebar}>
        <p style={{paddingLeft:'40px', fontSize:'25px',fontWeight:'800'}}>Home</p>
        <ul className="list-sidebar">
            <p>Dashboard</p>
            <li>Profile</li>
            <li>Games Finished</li>
            <li>Wishlist</li>
            <li>Recommended Games</li>
        </ul>
        <ul className="list-sidebar">
            <p>Top Games</p>
            <li>Top This Year</li>
            <li>Top 2024</li>
        </ul>
        <ul className="list-sidebar genre">
            <p>Genres</p>
            <li>Action</li>
            <li>RPG</li>
            <li>Roguelike</li>
            <li>RTS</li>
        </ul>
    </div>
  )
}

export default Sidebar
