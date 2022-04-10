import React from 'react'
import { Header } from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import { Footer } from 'containers/Footer/Footer'
import 'common/reset.css'
import 'common/style.css'
import 'common/adaptive.css'
import 'pages/category/category.css'
import { Route, Routes } from 'react-router-dom'
import { Animals } from 'pages/category/Animals'
import { People } from 'pages/category/People'
import { Nature } from 'pages/category/Nature'

export const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/animals" element={<Animals />}></Route>
                <Route path="/people" element={<People />}></Route>
                <Route path="/nature" element={<Nature />}></Route>
            </Routes>
            <Footer />
        </>
    )
}
