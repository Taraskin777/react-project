import React from 'react'

const TopText = () => {
    return (
        <>
            <div className="row text-block col-xs-12 col-sm-9">
                <div className="h2 col-xs-12 col-sm-7">
                    I have been taking photographs for 8 years.
                </div>
                <div className="descr col-xs-12 col-sm-5">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud
                    </p>
                    <div className='view-photos'>
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
    return (
        <>
            <div className="ihave-img-top col-xs-12 col-sm-3"></div>
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
