import React from "react"
import styled from "styled-components"
import WeatherIcon from "../../components/WeatherIcon"
import { primary2, secondary, tertiary } from "../../theme/colors"
const Wrapper = styled.div`
    display: flex;
    position: relative;
    justify-content: space-around;
    background-color: ${secondary};
    border-radius: 10px;
    margin: 20px;
    border: solid 10px ${tertiary};

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
    return (
        <Wrapper>
            <Temperature>
                {props.temperature}&deg;f
            </Temperature>
            <Summary>
                <WeatherIcon icon={props.icon} />
                Today: {props.summary}
            </Summary>
        </Wrapper>
    )
}