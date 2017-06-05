import React from "react"
import styled from "styled-components"

const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100%;
    padding: 0;
    font-size: 22px;
    flex-grow: 1;
`

export default class WeatherDataList extends React.Component {
    render() {
        return (
            <List {...this.props} />
        )
    }
}