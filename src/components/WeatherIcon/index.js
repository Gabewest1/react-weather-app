import React from "react"
import styled from "styled-components"

const WeatherIcon = styled.img`
    max-width: 75%
    max-height: 75%
`

export default (props) => {
    let { icon } = props
    let iconSrc = `/assets/images/${icon}.png`

    return (
        <WeatherIcon src={iconSrc} alt={icon} />
    )
}