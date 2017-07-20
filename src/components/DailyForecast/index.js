import React from "react"
import Wrapper from "./Wrapper"
import WeatherIcon from "../WeatherIcon"


export default (props) => {
    let { icon, precipProbability, maxTemp, minTemp, summary } = props

    return (
        <Wrapper>
            <WeatherIcon icon={icon} />
            <h1 style={{textAlign: "center"}}>
                <b>{maxTemp}&deg;f</b> 
                <div style={{width: "100%", height: "1px", background: "white"}}/>
                {minTemp}&deg;f
            </h1>
        </Wrapper>
    )
}