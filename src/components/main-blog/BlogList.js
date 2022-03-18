import React from 'react'
import { BlogListItem } from './BlogListItem'
import { blogArray } from './blogArray'
import './main-blog.css'

export const BlogList = () => {
    return (
        <>
            <section className="blog">
                <div className="container">
                    <div className='row'>
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
                                <div key={id}>
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
                </div>
            </section>
        </>
    )
}
