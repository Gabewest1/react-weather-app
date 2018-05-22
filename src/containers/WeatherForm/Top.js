import React from "react"
import styled from "styled-components"
import { Textfit } from "react-textfit"
import WeatherIcon from "../../components/WeatherIcon"
import { primary, secondary, ICON_DAY_COLOR } from "../../theme/colors"
import SwitchButton from "react-switch"

const Settings = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 0;
`
const Location = styled.div`
    font-weight: bold;
    font-size: 12px;

    @media (min-width: 768px) {
        font-size: 16px;
    }
`
const Wrapper = styled.div`
    background-color: ${secondary};
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
    font-size: 36px;
    font-weight: 100;
    margin: 0;

    @media (min-width: 768px) {
        font-size: 76px;
    }
`
const Summary = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
const Description = styled.em`
    font-size: 16px;
    margin-top: 10px;

    @media (min-width: 768px) {
        font-size: 24px;
    }
`
const TemperatureSetting = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 120px;
    align-self: flex-start;

    .react-switch-bg {
        background: ${ primary } !important;
    }

    span {
        font-size: 22px;
    }
`

export default ({ celciusMode, location, temperature, tempSymbol, icon , setCelciusMode, summary }) => {
    return (
        <div>
            <Settings>
                <Location>{ location }</Location>
                <TemperatureSetting>
                    <span>&deg;f</span>
                    <SwitchButton
                        checked={ celciusMode }
                        uncheckedIcon={ false }
                        checkedIcon= { false }
                        onChange={ () => setCelciusMode(!celciusMode) } />
                    <span>&deg;c</span>
                </TemperatureSetting>
            </Settings>
            <Wrapper>
                <Temperature data-test="temperature">
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