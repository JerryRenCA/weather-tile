import React from 'react'
import tw from 'tailwind-styled-components'

const Container=tw.div`w-full flex justify-center items-start text-4xl font-bold`

const WeatherPage2 = ({pageId}:{pageId:number}) => {
    return (
        <Container>
            <div > You reached page #{pageId+1}.</div>
        </Container>
    )
}
export default WeatherPage2