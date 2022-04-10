import React from 'react'
import { Header } from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import { Footer } from 'containers/Footer/Footer'
import 'common/reset.css'
import 'common/style.css'
import 'common/adaptive.css'
import { Route, Routes } from 'react-router-dom'
import { Animals } from 'pages/category/Animals'

export const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/animals" element={<Animals />}></Route>
            </Routes>
            <Footer />
        </>
    )
}
