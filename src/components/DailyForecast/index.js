import React from "react"
import Wrapper from "./Wrapper"
import WeatherIcon from "../WeatherIcon"

export default (props) => {
    let { day, icon, precipProbability, maxTemp, minTemp, summary, tempSymbol } = props

    return (
        <Wrapper>
            <h1>{day}</h1>
            <WeatherIcon icon={icon} />
            <h1 style={{textAlign: "center"}}>
                <b>{maxTemp}&deg;{tempSymbol}</b> 
                <div style={{width: "100%", height: "1px", background: "white"}}/>
                {minTemp}&deg;{tempSymbol}
            </h1>
        </Wrapper>
    )
}