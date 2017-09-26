import React, { Component } from 'react';

import { connect } from "react-redux";

class ProfileComponent extends Component {
    render() {
        return (
            <div>
                <h3>Profile Info</h3>
                <p>Username: {this.props.username}</p>
                <p>Email: {this.props.email}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.user;
}

export default connect(mapStateToProps, {})(ProfileComponent);