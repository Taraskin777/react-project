import React from 'react'
import './contacts.css'

export const Contacts = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row social">
                        <div className="facebook soc">
                            <a href="#"></a>
                        </div>
                        <div className="gplus soc">
                            <a href="#"></a>
                        </div>
                        <div className="twitter soc">
                            <a href="#"></a>
                        </div>
                        <div className="pinterest soc">
                            <a href="#"></a>
                        </div>
                        <div className="linked soc">
                            <a href="#"></a>
                        </div>
                    </div>
                    <div className="phone">
                        <p>
                            <span> +61 (0) 3 8376 6284</span> noreply@envato.com
                        </p>
                    </div>
                    <div className="adress">
                        <p>
                            {' '}
                            <span>
                                Level 13, 2 Elizabeth St, Melbourne, Victoria
                                3000, Australia
                            </span>{' '}
                        </p>
                    </div>
                    <div className="arrowup"></div>
                </div>
            </section>
        </>
    )
}
