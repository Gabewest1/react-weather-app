import React from "react"
import styled from "styled-components"
import OuterspaceStyles from "../../theme/Outerspace.styles.js"

let Clouds = styled(OuterspaceStyles)`
    background: transparent url(/assets/images/nightsky--clouds.png) repeat top center;
    z-index: -1;
    animation: move-clouds-back 200s linear infinite;
`

export default (props) => {
    return (
        <Clouds />
    )
}