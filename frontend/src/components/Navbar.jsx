import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import app from "../base";
import { AuthContext } from ".././Auth";

const Navbar = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Postman Clone</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/history">History<span className="sr-only">(current)</span></Link>
                {currentUser ? <Link className="nav-item nav-link" onClick={() => app.auth().signOut()}>Sign Out</Link> : <Link className="nav-item nav-link" to="/login">Login</Link>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;