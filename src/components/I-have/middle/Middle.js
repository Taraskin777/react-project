import React from 'react'

export const Middle = () => {
    return (
        <>
            <div className="row">
                <div className="middle1-img col-xs-12 col-sm-3"></div>
                <div className="middle2 col-xs-12 col-sm-3">
                    <div className="box black">
                        <div className="icon-2"></div>
                        <h4>I have a wide photographic offer</h4>
                        <div className='view-photos'>
                            <button>
                                <a href="#">VIEW OFFER</a>
                            </button>
                            <div className="arrow-white"></div>
                        </div>
                    </div>
                </div>
                <div className="middle3-img col-xs-12 col-sm-3"></div>
                <div className="middle4 col-xs-12 col-sm-3">
                    <div className="box">
                        <div className="icon-3"></div>
                        <h4>I have a wide photographic offer</h4>
                        <div className='view-photos'>
                            <button>
                                <a href="#">GO TO THE CONTACT</a>
                            </button>
                            <div className="arrow"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
