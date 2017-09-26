import React, { Component } from 'react';
import DolphinListComponent from "./DolphinListComponent"

export default class DolphinListContainer extends Component {
    componentDidMount(){
        this.props.loadDolphins ? this.props.loadDolphins(): null;
    }
    render() {
        return (
            <DolphinListComponent dolphins={this.props.dolphins || []}/>
        )
    }
}
