import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'

export const Menu = () => {
    return (
        <nav className="navigation col-md-6">
            <div>
                <ul className="menu">
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/">INFO</Link>
                    </li>
                    <li>
                        <Link to="/">BLOG</Link>
                    </li>
                    <li>
                        <Link to="/">PORTFOLIO</Link>
                    </li>
                    <li>
                        <Link to="/">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
