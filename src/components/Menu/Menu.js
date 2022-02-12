import React from 'react'
import './menu.css'

export const Menu = () => {
    return (
        <nav className="navigation col-md-6">
            <div>
                <ul className="menu">
                    <li className="first">
                        <a href="#">HOME</a>
                    </li>
                    <li>
                        <a href="#">INFO</a>
                    </li>
                    <li>
                        <a href="#">BLOG</a>
                    </li>
                    <li>
                        <a href="#">PORTFOLIO</a>
                    </li>
                    <li>
                        <a href="#">CONTACT</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
