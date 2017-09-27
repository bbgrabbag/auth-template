import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class ProtectedRoute extends Component {
    render() {
        console.log(this.props);
        let Component = this.props.component,
            path = this.props.path;
        return (
            <Route path={path} render={(props) => {
                return this.props.isAuthenticated ?
                    <Component {...props} /> :
                    <Redirect to={{
                        pathname: "/login"
                    }} />
            }} />
        )
    }
}
const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {})(ProtectedRoute);
