import React from "react"
import styled from "styled-components"
import WeatherIcon from "../WeatherIcon"
import { primary, ICON_DAY_COLOR } from "../../theme/colors"

const Day = styled.h1`
    
`
const Temperatures = styled.h2`
    font-weight: 100;    
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;
    width: 50px;
    font-size: .4em;

    @media (min-width: 768px) {
        font-size: .6em;
        height: 180px;
        width: 75px;
    }
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
                {maxTemp}&deg;{tempSymbol}
                <div style={{width: "100%", height: "1px", background: primary}}/>
                {minTemp}&deg;{tempSymbol}
            </Temperatures>
        </Wrapper>
    )
}
