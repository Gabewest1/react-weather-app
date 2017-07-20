import React from "react"
import styled from "styled-components"
import { Textfit } from "react-textfit"
import WeatherIcon from "../../components/WeatherIcon"
import { primary2, secondary, tertiary } from "../../theme/colors"

const Wrapper = styled.div`
    display: flex;
    position: relative;
    justify-content: space-around;
    background-color: ${secondary};
    border-radius: 10px;
    margin-bottom: 1.5em;
    border: solid 2px ${primary2};
`
const Temperature = styled(Textfit)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin-left: auto;
`
const Summary = styled(Textfit)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
`


export default (props) => {
    return (
        <Wrapper>
            <Temperature mode="single" max={150}>
                {props.temperature}&deg;f
            </Temperature>
            <Summary>
                <b>Today:</b> 
                <WeatherIcon icon={props.icon} />
                <em>{props.summary}</em>
            </Summary>
            {props.children}
        </Wrapper>
    )
}