import React from 'react'

export const BlogListItem = ({ image, name, phototext, buttonview }) => {
    return (
        <>
            <section>
                <div>
                    <div className="row">
                        <div className="article-img col-xs-12 col-sm-6">
                            <img src={image} alt=""></img>
                        </div>
                        <div className="text col-xs-12 col-sm-6">
                            <div className="name">{name}</div>
                            <div className="phototext">{phototext}</div>
                            <div className="buttonview">{buttonview}</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
