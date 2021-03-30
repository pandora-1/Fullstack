import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link class="navbar-brand" to="/">Postman Clone</Link>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <Link class="nav-item nav-link active" to="/history">History<span class="sr-only">(current)</span></Link>
                <Link class="nav-item nav-link" to="/login">Login</Link>
                </div>
            </div>
        </nav>
    )
}

