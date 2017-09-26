import React, { Component } from 'react'

export default class DolphinItemComponent extends Component {
    render() {
        return (
            <div>
                <h4>Name: {this.dolphin.name}</h4>
                <h6>Type: {this.dolphin.type}</h6>
                <h6>Age: {this.props.age}</h6>
            </div>
        )
    }
}
