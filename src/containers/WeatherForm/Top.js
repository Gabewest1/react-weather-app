import React from "react"
import styled from "styled-components"
import { Textfit } from "react-textfit"
import WeatherIcon from "../../components/WeatherIcon"
import { primary2, secondary, tertiary } from "../../theme/colors"
import SwitchButton from "react-switch-button"

const Settings = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 0;
`
const Location = styled.div`
    font-weight: bold;
`
const Wrapper = styled.div`
    background-color: ${secondary};
    border: solid 2px ${primary2};
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    position: relative;
    padding: 1em;
    margin-bottom: 1.5em;
`
const Temperature = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 78px;
    margin: 0;
`
const Summary = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Description = styled.em`
    font-size: 24px;
    margin-top: .78em;
`
export default ({ celciusMode, location, temperature, tempSymbol, icon , setCelciusMode, summary }) => {
    return (
        <div>
            <Settings>
                <Location>{ location }</Location>
                <SwitchButton
                    name="switch-8" 
                    label="&deg;f"
                    labelRight="&deg;c"
                    defaultChecked={ celciusMode }
                    onChange={ () => setCelciusMode(!celciusMode) } />
            </Settings>
            <Wrapper>
                <Temperature mode="single" max={150}>
                    { temperature }&deg;{ tempSymbol }
                </Temperature>
                <Summary>
                    <WeatherIcon icon={ icon } />
                    <Description>{ summary }</Description>
                </Summary>
            </Wrapper>
        </div>
    )
}