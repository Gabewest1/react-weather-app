import React from "react"
import styled from "styled-components"
import { ReactHeight } from "react-height"
import {
    primary,
} from "../../theme/colors"

const styles = {
    height: undefined,
    backgroundColor: undefined,
    fill: undefined
}

const Form = styled(ReactHeight)`
    box-sizing: border-box;
    color: ${ primary };
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: ${() => styles.height};
    width: 80%;
    max-width: 609px;
    padding: 10px;
    transition: height 1s ease-in-out;
    background-color: ${() => styles.backgroundColor};
    border-radius: 10px;

    svg {
        fill:${() => styles.fill};
    }
`

function getHeight(props) {
    const NORMAL_HEIGHT = "120px"
    let EXPANDED_HEIGHT = props.weatherData.get("heightToCollapse") + props.weatherData.get("height") +"px"
    let { collapsed } = props.weatherData.toJS()

    if(collapsed) {
        return NORMAL_HEIGHT
    } else {
        return EXPANDED_HEIGHT
    }
}

export default props => {
    const { fill, backgroundColor, weatherData, ...rest } = props
    styles.fill = fill
    styles.height = getHeight(props)
    styles.backgroundColor = backgroundColor

    return (
        <Form {...rest} />
    )
}