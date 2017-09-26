import React, { Component } from 'react'

export default class DolphinFormComponent extends Component {
    render() {
        return (
            <div className="form-wrapper">
                <form onSubmit={this.props.handleSubmit}>
                    <input onChange={this.props.handleChange} value={this.props.name} name="name" type="text" placeholder="Name" />
                    <input onChange={this.props.handleChange} value={this.props.type} name="type" type="text" placeholder="Type" />
                    <input onChange={this.props.handleChange} value={this.props.age} name="age" type="text" placeholder="Age" />
                    <button type="submit">Add Dolphin</button>
                </form>
            </div>
        )
    }
}
