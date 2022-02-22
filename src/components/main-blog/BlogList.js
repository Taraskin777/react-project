import React from 'react'
import { BlogListItem } from './BlogListItem'
import { blogArray } from './blogArray'
import './main-blog.css'

export const BlogList = () => {
    return (
        <>
            <section className="blog">
                <div className="container">
                    {blogArray.map(
                        ({
                            id,
                            image,
                            name,
                            phototext,
                            buttonview,
                            line,
                            arrow,
                        }) => (
                            <div className="row" key={id}>
                                <BlogListItem
                                    image={image}
                                    line={line}
                                    name={name}
                                    phototext={phototext}
                                    buttonview={buttonview}
                                    arrow={arrow}
                                />
                            </div>
                        )
                    )}
                </div>
            </section>
        </>
    )
}
