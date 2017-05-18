import React from "react"
import styled from "styled-components"

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
const Icon = styled.img`
    max-width: 75%
    max-height: 75%
`

export default (props) => {
    // const iconSrc = `/assets/images/${props.icon}.png`
    const iconSrc = `/assets/images/cloudy.png`
    return (
        <Wrapper>
            <Temperature>
                {props.temperature}&deg;f
            </Temperature>
            <Summary>
                <Icon src={iconSrc} alt="icon" />
                Today: {props.summary}
            </Summary>
        </Wrapper>
    )
}