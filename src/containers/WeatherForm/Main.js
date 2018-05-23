import React from "react"
import styled from "styled-components"
import { ReactHeight } from "react-height"

import Top from "./Top"
import WeeklyForecastContainer from "../WeeklyForecastContainer"

const Main = styled.div`
    opacity: ${({showData}) => showData ? 1 : 0};
    position: ${({showData}) => showData ? "relative" : "absolute"};
    margin-bottom: 22px;
    width: 100%;
`

export default (props) => {
    let { 
        celciusMode, tempSymbol, temperature, summary,
        icon, setHeightToCollapse, showData, location,
        setCelciusMode
    } = props

    return (
        <Main id="main" showData={showData} >
            <Top
                temperature={ temperature }
                summary={ summary }
                icon={ icon }
                location={ location }
                tempSymbol={ tempSymbol }
                celciusMode={ celciusMode }
                setCelciusMode={ setCelciusMode }/>
            <WeeklyForecastContainer /> 
        </Main>
    )
}