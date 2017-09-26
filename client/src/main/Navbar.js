import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Navbar extends Component {
    render() {
        return (

            <div className="navbar-wrapper">
                <Link to="/">SignUp</Link>
                <Link to="/login">Login</Link>
                <Link to="/">Logout</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/dolphins">Dolphins</Link>
            </div>

        )
    }
}
