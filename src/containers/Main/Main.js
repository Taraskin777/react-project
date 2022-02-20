import React from 'react'
import { Greeting } from 'components/Greeting/Greeting'
import { BlogList } from 'components/main-blog/BlogList'
import { IHave } from 'components/I-have/I-have'
import { Newsletter } from 'components/Newsletter/Newsletter'

export const Main = () => {
    return (
        <>
            <Greeting />
            <BlogList />
            <IHave />
            <Newsletter/>
        </>
    )
}
