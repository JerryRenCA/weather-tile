import React from 'react'
import tw from 'tailwind-styled-components'

const Container=tw.div`w-full flex justify-center items-start text-4xl font-bold`

const WeatherPage2 = ({pageId}:{pageId:number}) => {
    return (
        <Container>
            <div > Page #{pageId+1} in development.</div>
        </Container>
    )
}
export default WeatherPage2