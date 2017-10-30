import React from "react"
import styled from "styled-components"

const WeatherIcon = styled.img`
    max-width: 100%
`

export default ({ icon, tempSymbol }) => {
    let iconSrc = `/assets/images/temp/${icon}.svg`

    return (
        <WeatherIcon src={iconSrc} alt={icon} />
    )
}
