import React from "react"
import styled from "styled-components"
import WeatherIcon from "../../components/WeatherIcon"

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;

    > * {
        flex: 1 1 50%;
    }
`
const Temperature = styled.div`
    font-size: 10vw;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Summary = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 3vw;
`


export default (props) => {
    const iconSrc = `/assets/images/${props.icon}.png`

    return (
        <Wrapper>
            <Temperature>
                {props.temperature}&deg;f
            </Temperature>
            <Summary>
                <WeatherIcon src={iconSrc} alt="icon" />
                Today: {props.summary}
            </Summary>
        </Wrapper>
    )
}