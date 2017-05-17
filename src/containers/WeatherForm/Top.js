import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 600px;
    margin: 10px auto;
`
const Temperature = styled.div`
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Summary = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
`
const Icon = styled.img`
    max-width: 100%
`

export default (props) => {
    // const iconSrc = `/assets/images/${props.icon}.png`
    const iconSrc = `/assets/images/partly-cloudy-day.png`
    return (
        <Wrapper>
            <Temperature>
                {props.temperature}
            </Temperature>
            <Summary>
                <Icon src={iconSrc} alt="icon" />
                {props.summary}
            </Summary>
        </Wrapper>
    )
}