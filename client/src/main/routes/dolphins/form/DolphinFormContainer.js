import React, { Component } from 'react';
import DolphinFormComponent from "./DolphinFormComponent";
import { connect } from "react-redux";
import { addDolphin } from "../../../../redux/actions/index";

class DolphinFormContainer extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                name: "",
                type: "",
                age: ""
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
                name: "",
                type: "",
                age: ""
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addDolphin(this.state.inputs)
        this.clearInputs();
    }
    render() {
        return (
            <DolphinFormComponent
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                {...this.state.inputs} />
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { addDolphin })(DolphinFormContainer);


