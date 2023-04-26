import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const TopText = () => {
    return (
        <>
            <div className="row text-block col-xs-12 col-sm-9">
                <div data-aos="flip-up" className="h2 col-xs-12 col-sm-7">
                    I have been taking photographs for 8 years.
                </div>
                <div data-aos="flip-down" className="descr col-xs-12 col-sm-5">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud
                    </p>
                    <div className="view-photos">
                        <button>
                            <a href="https://www.google.com.ua">VIEW PHOTOS</a>
                        </button>
                        <div className="arrow"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

const TopImage = () => {
    AOS.init({ duration: 3000, delay:1500 })
    return (
        <>
            <div
                data-aos="flip-up"
                className="ihave-img-top col-xs-12 col-sm-3"
            ></div>
        </>
    )
}

export const TopList = () => {
    return (
        <>
            <div className="row">
                <TopText />
                <TopImage />
            </div>
        </>
    )
}
