import { NavLink } from "react-router-dom";

function Nav(){

    function logout(){
        window.localStorage.removeItem('userToken');
        window.localStorage.removeItem('userID');
        window.location.href="/";
    }

    const gotoProfile = () =>{
        window.location.href="/user/account/profile";
    }
    return (
        <nav className="navbar">
            <h1 className='navbar-logo'>Logo</h1>
            <div className="navbar-list-container">
                <ul className="navbar-list">
                    <li>
                        <NavLink exact="true" to="/user/account" style={{textDecoration:"none", color:"#fff"}}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <button onClick={gotoProfile} className="btn">MyProfile</button>
                    </li>
                    <li>
                        <button onClick={logout} className="btn">Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;