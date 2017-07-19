import React from "react"
import styled from "styled-components"
import { ReactHeight } from "react-height"

import Top from "./Top"
import DailyForecastContainer from "../DailyForecastContainer"

const Main = styled(ReactHeight)`
    display: grid;
    opacity: ${({showData}) => showData ? 1 : 0};
    position: ${({showData}) => showData ? "relative" : "absolute"};
    width: 100%;

`

export default (props) => {
    let { temperature, summary, icon, setHeightToCollapse, showData } = props
    
    return (
        <Main onHeightReady={(height) => setHeightToCollapse(height)} showData={showData} >
            <Top temperature={temperature} summary={summary} icon={icon}/>
            <DailyForecastContainer />
        </Main>
    )
}