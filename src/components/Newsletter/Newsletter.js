import React from 'react'
import './newsletter.css'

export const Newsletter = () => {
    return (
        <>
            <section className="newsletter">
                <div className="paralax">
                    <div className="container">
                        <div className="news-box">
                            <div className="h2">Newsletter</div>
                            <div className="send">
                                <form>
                                    <input
                                        type="email"
                                        placeholder="Your e-mail"
                                        className="input-mail"
                                    ></input>
                                    <input
                                        type="submit"
                                        value="Send a message"
                                        className="mail-send"
                                    ></input>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
