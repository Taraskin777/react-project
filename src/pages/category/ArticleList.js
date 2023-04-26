import React from 'react'
import { blogArray } from '../../components/main-blog/blogArray'
import { People } from './People'

export const ArticleList = () => {
    return (
        <>
            <section>
                <div>
                    {blogArray
                        .filter((el) => el.articlecategory === 'people')
                        .map(
                            ({
                                id,
                                articlecategory,
                                articletitle,
                                article,
                            }) => (
                                <People
                                    key={id}
                                    articlecategory={articlecategory}
                                    articletitle={articletitle}
                                    article={article}
                                />
                            )
                        )}
                </div>
            </section>
        </>
    )
}
