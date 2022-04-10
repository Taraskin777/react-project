import React from 'react'
import { NavLink } from 'react-router-dom'
import './menu.css'


const setNavLinkClass = ({isActive}) => (isActive ? 'nav-link' : '')

export const Menu = () => {
    return (
        <nav className="navigation col-md-6">
            <div>
                <ul className="menu">
                    <li>
                        <NavLink className={setNavLinkClass} to="/">HOME</NavLink>
                    </li>
                    <li>
                        <NavLink className={setNavLinkClass} to="/info">INFO</NavLink>
                    </li>
                    <li>
                        <NavLink className={setNavLinkClass} to="/blog">BLOG</NavLink>
                    </li>
                    <li>
                        <NavLink className={setNavLinkClass} to="/portfolio">PORTFOLIO</NavLink>
                    </li>
                    <li>
                        <NavLink className={setNavLinkClass} to="/contact">CONTACT</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
