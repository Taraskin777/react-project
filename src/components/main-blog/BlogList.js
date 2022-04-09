import React from 'react'
import { BlogListItem } from './BlogListItem'
import { blogArray } from './blogArray'
import './main-blog.css'

export const BlogList = () => {
    return (
        <>
            <section className="blog">
                <div className="container">
                    <div className="row">
                        {blogArray.map(
                            ({
                                id,
                                image,
                                name,
                                phototext,
                                buttonview,
                                line,
                                arrow,
                                category,
                            }) => (
                                <BlogListItem
                                    key={id}
                                    image={image}
                                    line={line}
                                    name={name}
                                    phototext={phototext}
                                    buttonview={buttonview}
                                    arrow={arrow}
                                    category = {category}
                                />
                            )
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
