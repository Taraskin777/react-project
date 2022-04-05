import React from 'react'
import { Greeting } from 'components/Greeting/Greeting'
import { BlogList } from 'components/main-blog/BlogList'
import { IHave } from 'components/I-have/I-have'
import { Newsletter } from 'components/Newsletter/Newsletter'
import { ImageSlider } from 'components/Slider/ImageSlider'
import { SliderData } from 'components/Slider/SliderData'

export const Main = () => {
    return (
        <>
            <Greeting />
            <BlogList />
            <ImageSlider slides={SliderData} />
            <IHave />
            <Newsletter />
        </>
    )
}
