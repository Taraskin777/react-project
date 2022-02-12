import React from 'react'
import { Menu } from 'components/Menu/Menu'
import { Logo } from 'components/Logo/Logo'

export const Header = () => {
    return (
        <>
            <section className="top-header">
                <div className="container">
                    <div>
                        <div className="row header">
                            <Logo />
                            <Menu />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
