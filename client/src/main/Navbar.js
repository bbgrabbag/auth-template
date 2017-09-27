import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/actions/index";

class Navbar extends Component {
    render() {
        return (

            <div className="navbar-wrapper">
                {this.props.isAuthenticated ?
                    null :
                    <Link to="/">Sign Up</Link>}
                {this.props.isAuthenticated ?
                    null :
                    <Link to="/login">Log In</Link>}
                {this.props.isAuthenticated ?
                    <Link to="/profile">Profile</Link> :
                    null}
                {this.props.isAuthenticated ?
                    <Link to="/dolphins">Dolphins</Link> :
                    null}
                {this.props.isAuthenticated ?
                    <button onClick={this.props.logout}>Logout</button> :
                    null}
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { logout })(Navbar);

