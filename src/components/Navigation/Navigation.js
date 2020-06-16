////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import './Navigation.css'
////////////////////////////////////////////////////////////////////////////////

class Navigation extends Component {
    render() {
        return (
            <>
                <ul className="nav">
                    <li className="nav_items">About</li>
                    <li className="nav_items">Coding</li>
                    <li className="nav_items">Writing</li>
                </ul>
            </>
        )
    }
}

export default Navigation;