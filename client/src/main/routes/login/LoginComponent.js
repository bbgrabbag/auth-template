import React, { Component } from 'react'

export default class LoginComponent extends Component {
    render() {
        return (
            <div className="form-wrapper">
                <h3>Log In</h3>
                <form action="">
                    <input type="text" placeholder="@Username" />
                    <input type="text" placeholder="#" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
