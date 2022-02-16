import React from 'react'
import { TopList } from './top/TopList'
import { Middle } from './middle/Middle'
import { Bottom } from './bottom/Bottom'
import './i-have.css'

export const IHave = () => {
    return (
        <>
            <section className="i-have">
                <row>
                    <TopList />
                    <Middle />
                    <Bottom />
                </row>
            </section>
        </>
    )
}
