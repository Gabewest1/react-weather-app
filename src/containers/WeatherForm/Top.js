import React from "react"
import styled from "styled-components"
import { Textfit } from "react-textfit"
import WeatherIcon from "../../components/WeatherIcon"
import { primary2, secondary, tertiary } from "../../theme/colors"

const Wrapper = styled.div`
    display: flex;
    position: relative;
    justify-content: space-around;
    background-color: ${secondary};
    border-radius: 10px;
    margin-bottom: 1.5em;
    border: solid 2px ${primary2};
`
const Temperature = styled(Textfit)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin-left: auto;
`
const Summary = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
`
const Location = styled.div`

`
const CelciusModeButton = styled.button`
    outline: none;
    border: solid thin white;
    padding: 10px 20px;
    background: transparent;
    color: white;
`

export default ({ location, temperature, tempSymbol, icon , summary }) => {
    return (
        <div>
            <Location>
                <b>{ location }</b>                 
            </Location>
            <Wrapper>
                <Temperature mode="single" max={150}>
                    { temperature }&deg;{ tempSymbol }
                    <CelciusModeButton>Celcius</CelciusModeButton>
                </Temperature>
                <Summary>
                    <WeatherIcon icon={ icon } />
                    <em>{ summary }</em>
                </Summary>
            </Wrapper>
        </div>
    )
}