import React from 'react'
import { Header } from 'components/Header/Header'
import { Main } from 'components/Main/Main'
import { Footer } from 'components/Footer/Footer'
import 'common/reset.css'
import 'common/style.css'
import 'common/adaptive.css'

export const App = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}
