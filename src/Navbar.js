import React from 'react';
import { Link, NavLink} from 'react-router-dom'


const Navbar = () => {
  
    return(
        <nav>
            <div className="nav-wrapper">
            <Link to="/" className="brand-logo">First React Appi</Link>
            <ul className="right">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/Favourites">Favourites</NavLink></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar