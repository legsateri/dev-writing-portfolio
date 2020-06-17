////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import './Navigation.css'
////////////////////////////////////////////////////////////////////////////////

class Navigation extends Component {
    render() {
        return (
            <>
                <ul className="nav">
                    <li className="nav_items"><Link to='/' className='link_style' style={{ textDecoration: 'none' }}>About</Link></li>
                    <li className="nav_items">Coding</li>
                    <li className="nav_items">Writing</li>
                </ul>
            </>
        )
    }
}

export default Navigation;