import React from "react"
import styled from "styled-components"
import WeatherIcon from "../WeatherIcon"
import { primary, tertiary } from "../../theme/colors"

const Day = styled.h1`
    font-size: 18px;
`
const Temperatures = styled.h1`
    font-size: 16px;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default (props) => {
    let { day, icon, precipProbability, maxTemp, minTemp, summary, tempSymbol } = props
    const style = {}

    style.maxWidth = icon === "wind" ? "120px" : "100%"

    return (
        <Wrapper>
            <Day>{day}</Day>
            <WeatherIcon icon={icon} style={ style } />
            <Temperatures style={{textAlign: "center"}}>
                <b>{maxTemp}&deg;{tempSymbol}</b> 
                <div style={{width: "100%", height: "1px", background: "white"}}/>
                {minTemp}&deg;{tempSymbol}
            </Temperatures>
        </Wrapper>
    )
}
