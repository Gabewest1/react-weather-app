import React from "react"
import styled from "styled-components"
// import Clouds from "../Clouds"

import OuterspaceStyles from "../../theme/Outerspace.styles.js"

let DaySky = styled(OuterspaceStyles)`
    background: linear-gradient(to top, #efefef 0%, lightblue 100%);
    z-index: -1;
`

let Sun = styled(OuterspaceStyles)`
    // position: absolute;
    // right: 0;
    // top: 0;
    background: url(/assets/images/daysky--sun.png) no-repeat;
    z-index: -3;
    @media (max-width: 968px) {
        width: 575px;
        height: 575px;
    }
`
let Clouds = styled(OuterspaceStyles)`
    background: url(/assets/images/daysky--clouds.png);     
    animation: move-clouds-back 200s linear infinite;   
`

export default (props) => {
    return (
        <DaySky> 
            <Clouds />  
            <Sun />
        </DaySky>
    )
}