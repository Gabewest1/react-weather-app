import React from "react"
import styled from "styled-components"
import DailyForecastContainer from "../DailyForecastContainer"

const Wrapper = styled.div`
    display: flex;
    flex-grow: 1;
`

const ListItem = styled.li`
    display: flex;
    flex: 1 1 33%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: solid thin black;
    font-size: 3vw;
`
const Span = styled.span`
    font-size: 1.5em;
    display: block;
`

export default (props) => {
    return (
        <Wrapper>
            <DailyForecastContainer />
        </Wrapper>
    )
}
