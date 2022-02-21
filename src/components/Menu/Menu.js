import React from 'react'
import './menu.css'

export const Menu = () => {
    return (
        <nav className="navigation col-md-6">
            <div>
                <ul className="menu">
                    <li className="first">
                        <a href="https://www.google.com.ua">HOME</a>
                    </li>
                    <li>
                        <a href="https://www.google.com.ua">INFO</a>
                    </li>
                    <li>
                        <a href="https://www.google.com.ua">BLOG</a>
                    </li>
                    <li>
                        <a href="https://www.google.com.ua">PORTFOLIO</a>
                    </li>
                    <li>
                        <a href="https://www.google.com.ua">CONTACT</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
