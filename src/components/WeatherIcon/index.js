import React from "react"
import styled from "styled-components"
import ClearDay from "./ClearDay"
import ClearNight from "./ClearNight"
import Cloudy from "./Cloudy"
import Fog from "./Fog"
import PartlyCloudyDay from "./PartlyCloudyDay"
import PartlyCloudyNight from "./PartlyCloudyNight"
import Rain from "./Rain"
import Snow from "./Snow"
import Wind from "./Wind"

export default ({ icon, tempSymbol, style }) => {    
    const WeatherIcon = WeatherIconFactory(icon)

    return <WeatherIcon style={{ maxWidth: "100%" }} />
}


function WeatherIconFactory(type) {
    switch (type) {
        case "clear-day":
            return ClearDay
        case "clear-night":
            return ClearNight
        case "cloudy":
            return Cloudy
        case "fog":
            return Fog
        case "partly-cloudy-day":
            return PartlyCloudyDay
        case "partly-cloudy-night":
            return PartlyCloudyNight
        case "rain":
            return Rain
        case "snow":
            return Snow
        case "wind":
            return Wind
        default:
            return Wind
    }
}