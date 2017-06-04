import React from "react"
import styled from "styled-components"
import OuterspaceStyles from "../../theme/Outerspace.styles.js"

let Twinkling = styled(OuterspaceStyles)`
    background: transparent url(http://sylvaingarnot.fr/media/twinkling.png) repeat top center;
    z-index: -2;
    animation: move-twink-back 200s linear infinite;
`

export default (props) => {
    return (
        <Twinkling />
    )
}