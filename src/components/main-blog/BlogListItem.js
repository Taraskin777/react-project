import React from 'react'
import PropTypes from 'prop-types'

export const BlogListItem = ({
    image,
    name,
    phototext,
    buttonview,
    line,
    arrow,
}) => {
    return (
        <>
            <section>
                <div className="row article">
                    <div className="article-img col-xs-12 col-sm-6">
                        <img src={image} alt=""></img>
                    </div>
                    <div className="text left-text col-xs-12 col-sm-6">
                        <div className="line">{line}</div>
                        <div className="name">{name}</div>
                        <div className="article-bot">
                            <div className="phototext">{phototext}</div>
                            <div className="article-button">
                                <div className="buttonview">{buttonview}</div>
                                <div className="arrow">{arrow}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
