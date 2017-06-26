import React from "react"
import Wrapper from "./Wrapper"
import WeatherIcon from "../WeatherIcon"

export default (props) => {
    let { icon, precipProbability, maxTemp, minTemp, summary } = props

    return (
        <Wrapper>
            <WeatherIcon icon={icon} />
            <h1>hi: {maxTemp} / lo: {minTemp}</h1>
        </Wrapper>
    )
}