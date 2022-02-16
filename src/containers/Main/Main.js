import React from 'react'
import { Greeting } from 'components/Greeting/Greeting'
import { BlogList } from 'components/main-blog/BlogList'
import { IHave } from 'components/I-have/I-have'

export const Main = () => {
    return (
        <>
            <Greeting />
            <BlogList />
            <IHave />
        </>
    )
}
