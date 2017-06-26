import React from "react"
import Wrapper from "./Wrapper"
import WeatherIcon from "../WeatherIcon"

export default (props) => {
    let { icon, precipProbability, maxTemp, minTemp, summary } = props

    return (
        <Wrapper>
            <WeatherIcon icon={icon} />
            <h1>
                <b>{maxTemp}&deg;f</b> 
                <br /> 
                {minTemp}&deg;f
            </h1>
        </Wrapper>
    )
}