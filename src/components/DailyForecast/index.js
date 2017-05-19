import React from "react"
import Wrapper from "./Wrapper"
import WeatherIcon from "../WeatherIcon"

export default (props) => {
    let { icon, precipProbability, maxTemp, minTemp, summary } = props
    const iconSrc = `/assets/images/${icon}.png`
    console.log("DailyForecast props:", props)

    return (
        <Wrapper>
            <WeatherIcon src={iconSrc} alt={icon} />
            <h1>{summary}</h1>
            <h1>{precipProbability}</h1>
            <h1>{maxTemp}</h1>
            <h1>{minTemp}</h1>
        </Wrapper>
    )
}