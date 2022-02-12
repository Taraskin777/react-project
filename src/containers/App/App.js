import React from 'react'
import { Header } from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import { Footer } from 'containers/Footer/Footer'
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
