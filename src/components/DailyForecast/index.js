import React from "react"
import styled from "styled-components"
import Wrapper from "./Wrapper"
import WeatherIcon from "../WeatherIcon"

let Day = styled.h1`
    font-size: 22px;
`
let Temperatures = styled.h1`
    font-size: 16px;
`
export default (props) => {
    let { day, icon, precipProbability, maxTemp, minTemp, summary, tempSymbol } = props

    return (
        <Wrapper>
            <Day>{day}</Day>
            <WeatherIcon icon={icon} />
            <Temperatures style={{textAlign: "center"}}>
                <b>{maxTemp}&deg;{tempSymbol}</b> 
                <div style={{width: "100%", height: "1px", background: "white"}}/>
                {minTemp}&deg;{tempSymbol}
            </Temperatures>
        </Wrapper>
    )
}