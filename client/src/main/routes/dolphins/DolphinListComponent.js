import React, { Component } from 'react';
import DolphinItemComponent from "./dolphin/DolphinItemComponent";

export default class DolphinListComponent extends Component {
    genList() {
        return this.props.dolphins.map((dolphin) => {
            return <DolphinItemComponent
                key={dolphin._id}
                dolphin={dolphin}
                id={dolphin._id} />
        })
    }
    render() {
        return (
            <div>
                <h2>My Dolphins</h2>
                {this.genList()}
            </div>
        )
    }
}
