import React, { Component } from 'react';
import SignupComponent from "./SignUpComponent";

import { connect } from "react-redux";
import { signup } from "../../../redux/actions/index";

class SignupContainer extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                username: "",
                password: "",
                email: ""
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
                password: "",
                email: ""
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state.inputs);
        this.clearInputs();
    }
    render() {
        return (
            <SignupComponent
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                {...this.state.inputs} />
        )
    }
}

export default connect(null, { signup })(SignupContainer);