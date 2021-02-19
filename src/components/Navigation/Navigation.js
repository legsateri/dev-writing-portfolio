////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
////////////////////////////////////////////////////////////////////////////////
import './Navigation.css'
////////////////////////////////////////////////////////////////////////////////

class Navigation extends Component {
    render() {
        return (
            <>
                <ul className="nav">
                    <li className="nav_items"><Link to='/' className={classnames('link_style', this.props.color)} style={{ textDecoration: 'none' }}>About</Link></li>
                    <li className="nav_items"><Link to='/coding' className={classnames('link_style', this.props.color)} style={{textDecoration: 'none'}}>Coding</Link></li>
                    <li className="nav_items"><Link to='/writing' className={classnames('link_style', this.props.color)} style={{textDecoration: 'none'}}>Writing</Link></li>
                </ul>
            </>
        )
    }
}

export default Navigation;