import React, { Component } from 'react'

export default class SignupComponent extends Component {
    render() {
        return (
            <div className="form-wrapper">
                <form action="">
                    <h3>Sign Up</h3>
                    <input type="text"placeholder="@Username"/>
                    <input type="text"placeholder="#"/>
                    <input type="text"placeholder="Email"/>
                    <button>Create Account</button>
                </form>
            </div>
        )
    }
}
