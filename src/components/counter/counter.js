import React, { useState, useEffect } from 'react'
import { Transition } from 'react-transition-group'
import './style.css'

export const MyComponent = () => {
    const [value, setValue] = useState(1)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setValue((prevValue) => (prevValue === 6 ? 1 : prevValue + 1))
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <Transition
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
        >
            <div key={value} className="example">
                {value}
            </div>
        </Transition>
    )
}
