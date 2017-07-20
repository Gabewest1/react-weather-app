import React from "react"
import styled from "styled-components"

const WeatherIcon = styled.img`
    max-width: 75%
    width: 75%;
`

export default (props) => {
    let { icon } = props
    // let iconSrc = `/assets/images/${icon}.png`
    let iconSrc = `/assets/images/clear-day.svg`

    return (
        <WeatherIcon src={iconSrc} alt={icon} />
    )
}