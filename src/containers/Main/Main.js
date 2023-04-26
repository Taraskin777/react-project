import React from 'react'
import { Greeting } from 'components/Greeting/Greeting'
import { BlogList } from 'components/main-blog/BlogList'
import { IHave } from 'components/I-have/I-have'
import { Newsletter } from 'components/Newsletter/Newsletter'
import { ImageSlider } from 'components/Slider/ImageSlider'
import { SliderData } from 'components/Slider/SliderData'
import { useInView } from 'react-intersection-observer'

export const Main = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
    })

    console.log(inView)

    return (
        <>
            <Greeting />
            <BlogList />
            {/* <ImageSlider slides={SliderData} /> */}
            <div ref={ref}>
                <IHave />
            </div>

            <Newsletter />
        </>
    )
}
