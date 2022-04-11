import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const BlogListItem = ({
    image,
    name,
    phototext,
    buttonview,
    line,
    arrow,
    category,
}) => {
    return (
        <>
            <div className="article">
                <div className="article-img col-xs-12 col-sm-6">
                    <img src={image} alt=""></img>
                </div>
                <div className="text col-xs-12 col-sm-6">
                    <div className="line">{line}</div>
                    <div className="name">{name}</div>
                    <div className="article-bot">
                        <div className="phototext">{phototext}</div>
                        <div className="article-button">
                            <div className="buttonview">
                                <a href="https://www.google.com.ua">
                                    {buttonview}
                                </a>
                            </div>
                            <div> {arrow}</div>
                        </div>
                    </div>

                    <div className="category">{category}</div>
                </div>
            </div>
        </>
    )
}

BlogListItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    phototext: PropTypes.string,
    buttonview: PropTypes.string.isRequired,
    line: PropTypes.string.isRequired,
    arrow: PropTypes.string.isRequired,
    category: PropTypes.string,
}

BlogListItem.defaultProps = {
    image: '/images/No-Image.png',
    phototext: 'No info...',
}
