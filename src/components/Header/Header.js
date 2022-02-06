import React from 'react'

export const Header = () => {
    return (
        <>
            <div className="section top-header">
                <div className="container">
                    <div>
                        <div className="row header">
                            <div className="logo">
                                <a href="#"></a>
                            </div>
                            <nav className="navigation col-md-6">
                                <div >
                                    <ul className="menu">
                                        <li className='first'>
                                            <a href="#">HOME</a>
                                        </li>
                                        <li>
                                            <a href="#">INFO</a>
                                        </li>
                                        <li>
                                            <a href="#">BLOG</a>
                                        </li>
                                        <li>
                                            <a href="#">PORFOLIO</a>
                                        </li>
                                        <li>
                                            <a href="#">CONTACT</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
