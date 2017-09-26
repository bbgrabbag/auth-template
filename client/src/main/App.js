import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import SignUpContainer from "./routes/signup/SignUpContainer";
import LoginContainer from "./routes/login/LoginContainer";
import ProfileComponent from "./routes/profile/ProfileComponent";
import DolphinListContainer from "./routes/dolphins/DolphinListContainer";

export default class App extends Component {
    render() {
        return (
            <div className="app-wrapper">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={SignUpContainer} />
                    <Route path="/login" component={LoginContainer} />
                    <Route path="/profile" component={ProfileComponent} />
                    <Route path="/dolphins" component = {DolphinListContainer}/>
                </Switch>
            </div>
        )
    }
}
