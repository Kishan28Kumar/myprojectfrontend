import { NavLink } from 'react-router-dom';
import './index.css';

function Nav(){
    return (
        <nav className="navbar">
            <h1 className='navbar-logo'>Logo</h1>
            <div className="navbar-list-container">
                <ul className="navbar-list">
                    <li>
                        <NavLink exact="true" to="/" style={{textDecoration:"none", color:"#fff"}}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" to="/aboutus" style={{textDecoration:"none", color:"#fff"}}>
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" to="/contactus" style={{textDecoration:"none", color:"#fff"}}>
                           Contact Us 
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;