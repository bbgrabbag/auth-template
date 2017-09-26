import React, { Component } from 'react'

export default class DolphinItemComponent extends Component {
    render() {
        return (
            <div className="dolphin-wrapper">
                <h4>Name: {this.props.dolphin.name}</h4>
                <h6>Type: {this.props.dolphin.type}</h6>
                <h6>Age: {this.props.dolphin.age}</h6>
            </div>
        )
    }
}
