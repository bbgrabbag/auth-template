import React, { Component } from 'react';
import DolphinListComponent from "./DolphinListComponent";
import { connect } from "react-redux";
import { loadDolphins } from "../../../redux/actions/index";

class DolphinListContainer extends Component {
    componentDidMount() {
        this.props.loadDolphins();
    }
    render() {
        return (
            <DolphinListComponent dolphins={this.props.dolphins} />
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { loadDolphins })(DolphinListContainer);

