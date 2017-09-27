import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";

import Navbar from "./Navbar";
import SignUpContainer from "./routes/signup/SignUpContainer";
import LoginContainer from "./routes/login/LoginContainer";
import ProfileComponent from "./routes/profile/ProfileComponent";
import DolphinListContainer from "./routes/dolphins/DolphinListContainer";
import ProtectedRoute from "./routes/ProtectedRoute";

import { connect } from "react-redux";
import { verifyToken } from "../redux/actions/index";

class App extends Component {
    componentWillMount(){
        this.props.verifyToken();
    }
    render() {
        return (
            <div className="app-wrapper">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={SignUpContainer} />
                    <Route path="/login" component={LoginContainer} />
                    <ProtectedRoute path="/profile" component={ProfileComponent} />
                    <ProtectedRoute path="/dolphins" component={DolphinListContainer} />
                </Switch>
            </div>
        )
    }
}


export default withRouter(connect(null, { verifyToken })(App));
