import React, { Component } from 'react';
import LoginComponent from "./LoginComponent";
import {Redirect} from "react-router-dom";

import { connect } from "react-redux";
import { login } from "../../../redux/actions/index";

class LoginContainer extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                username: "",
                password: ""
            }
        }
    }
    handleChange(e) {
        e.persist();
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }
    clearInputs() {
        this.setState({
            inputs: {
                username: "",
                password: ""
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state.inputs);
        this.clearInputs();
    }
    render() {
        return (
            this.props.isAuthenticated ?
                <Redirect to="/profile" /> :
                <LoginComponent
                    handleChange={this.handleChange.bind(this)}
                    handleSubmit={this.handleSubmit.bind(this)}
                    authError={this.props.authError}
                    {...this.state.inputs} />
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { login })(LoginContainer);