import React, { Component } from 'react';
import DolphinItemComponent from "./dolphin/DolphinItemComponent";
import DolphinFormContainer from "./form/DolphinFormContainer";

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
            <div >
                <h2>My Dolphins</h2>
                <DolphinFormContainer />
                <div className="dolphins-wrapper">
                    {this.genList()}
                </div>
            </div>
        )
    }
}
