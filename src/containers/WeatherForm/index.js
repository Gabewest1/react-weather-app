import React from "react"
import { ReactHeight } from "react-height"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

//import components
import { Field, reduxForm, SubmissionError } from "redux-form/immutable"
import WeatherButton from "./WeatherButton"
import Main from "./Main"
import Form from "./Form"
import Input from "./Input"
import Top from "./Top"
import Wrapper from "./Wrapper"

//import actions and selectors
import * as actions from "./actions"
import * as weatherDataSelectors from "./selectors"

import {
    NIGHT_TIME_COLOR,
    DAY_TIME_COLOR,
    ICON_DAY_COLOR,
    ICON_NIGHT_COLOR
} from "../../theme/colors"

class WeatherForm extends React.Component {
    handleSubmit(values) {
        console.log("handle submit called")
        let { location } = values
        let errors = {}
        let showData = this.props.weatherData.get("showData")

        if(!location || location.trim() === "") {
            throw new SubmissionError({location: "Required"})
        }
        
        this.props.fetchWeatherData(location)
    }
    handleHeightAnimation(e) {
        if(e.target.id === "weatherForm") {
            this.props.endFormHeightAnimation(e.target)
        }
    }
    setFormHeight = (height) => {
        let isFormHeightAlreadySet = this.props.weatherData.get("height")
        if(!isFormHeightAlreadySet) {
            this.props.setFormHeight(height)
        }
    }
    render() {
        let { isNightTime, handleSubmit, showWeatherData, weatherData } = this.props
        let isFetchingWeatherData = weatherData.get("isFetching")
        let hasWeatherData = weatherData.get("data")

        return (
            <Form
                id="weatherForm"
                data-test="weatherForm"
                weatherData={weatherData}
                backgroundColor={isNightTime ? NIGHT_TIME_COLOR : DAY_TIME_COLOR}
                fill={isNightTime ? ICON_NIGHT_COLOR : ICON_DAY_COLOR}
                onTransitionEnd={this.handleHeightAnimation.bind(this)}
                onHeightReady={(height) => this.setFormHeight(height)}
            >
                <Field
                    name="location" 
                    component={Input}
                    type="text" 
                    placeholder="Enter an address..."
                    loading={isFetchingWeatherData}
                    data-test="weatherQuery"
                />

                {hasWeatherData
                    ? <Main {...this.props} /> 
                    : null 
                }

                <Wrapper>
                    <WeatherButton data-test="weatherBtn" onClick={handleSubmit(this.handleSubmit.bind(this))}>
                        {hasWeatherData ? "New Location" : "Check Weather"}
                    </WeatherButton>
                    <WeatherButton data-test="currentLocationWeatherBtn" onClick={this.props.fetchCurrentLocationWeatherData}>My Location</WeatherButton>
                </Wrapper>
            </Form>
        )
    }
}

function mapStateToProps(state) {
    let data = state.weatherData.get("data")
    let showData = state.weatherData.get("showData")
    let temperature = data ? weatherDataSelectors.selectTemperature(state) : false
    let timezone = data ? weatherDataSelectors.selectTimezone(data) : false
    let humidity = data ? weatherDataSelectors.selectHumidity(data) : false
    let windSpeed = data ? weatherDataSelectors.selectWindSpeed(data) : false
    let rain = data ? weatherDataSelectors.selectRainProbability(data) : false
    let summary = data ? weatherDataSelectors.selectSummary(data) : false
    let icon = data ? weatherDataSelectors.selectIcon(data) : false
    let location = state.weatherData.get("location")
    let isNightTime = state.isNightTime.isNightTime

    return {
        weatherData: state.weatherData,
        showData,
        temperature,
        timezone,
        humidity,
        windSpeed,
        rain,
        summary,
        icon,
        isNightTime,
        location,
        celciusMode: weatherDataSelectors.selectCelciusMode(state),
        tempSymbol: weatherDataSelectors.selectTempSymbol(state)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}
export default reduxForm({
    form: "weatherData",
    fields: ["location"],
})(connect(mapStateToProps, mapDispatchToProps)(WeatherForm))
