import React from "react"
import styled from "styled-components"
import { ReactHeight } from "react-height"

import Top from "./Top"
import DailyForecastContainer from "../DailyForecastContainer"

const Main = styled.div`
    opacity: ${({showData}) => showData ? 1 : 0};
    position: ${({showData}) => showData ? "relative" : "absolute"};
    width: 100%;
`

export default (props) => {
    let { tempSymbol, temperature, summary, icon, setHeightToCollapse, showData, location } = props
    console.log("MAIN PROPS:", tempSymbol, temperature)
    return (
        <Main id="main" showData={showData} >
            <Top temperature={temperature} summary={summary} icon={icon} location={location} tempSymbol={tempSymbol} />
            <DailyForecastContainer /> 
        </Main>
    )
}