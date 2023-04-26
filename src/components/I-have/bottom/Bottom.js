import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


export const Bottom = () => {

    AOS.init({ duration: 3000, delay:1000 })

    return (
        <>
            <div className="row">
                <div data-aos="flip-left" className="bottom1 col-xs-12 col-sm-3">
                    <div className="box">
                        <div className="icon-4"></div>
                        <h4>Professional equipment</h4>
                        <div className="view-photos">
                            <button>
                                <a href="https://www.google.com.ua">READ MORE</a>
                            </button>
                            <div className="arrow"></div>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-right" className="bottom2-img col-xs-12 col-sm-3"></div>
                <div data-aos="flip-up" className="bottom3 col-xs-12 col-sm-3">
                    <div className="box">
                        <div className="icon-5"></div>
                        <h4>I run a travel photo blog</h4>
                        <div className="view-photos">
                            <button>
                                <a href="https://www.google.com.ua">VIEW BLOG</a>
                            </button>
                            <div className="arrow"></div>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-down" className="middle4-img col-xs-12 col-sm-3"></div>
            </div>
            <div />
        </>
    )
}
