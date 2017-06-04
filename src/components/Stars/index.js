import React from "react"
import styled from "styled-components"
import OuterspaceStyles from "../../theme/Outerspace.styles.js"

let Stars = styled(OuterspaceStyles)`
    background: #000 url(http://sylvaingarnot.fr/media/stars.png) repeat top center;
    z-index: -3;
`

export default (props) => {
    return(
        <Stars />
    )
}