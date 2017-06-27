import React from "react"
import { ReactHeight } from "react-height"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

//import components
import { Field, reduxForm, SubmissionError } from "redux-form/immutable"
import WeatherButton from "./WeatherButton"
import Form from "./Form"
import Input from "./Input"
import Top from "./Top"
import Wrapper from "./Wrapper"
import DailyForecastContainer from "../DailyForecastContainer"

//import actions and selectors
import * as actions from "./actions"
import * as weatherDataSelectors from "./selectors"
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
    renderWeatherData(showWeatherData) {
        let { temperature, summary, icon } = this.props
        return (
            <ReactHeight 
                onHeightReady={(height) => this.props.setHeightToCollapse(height)} 
                style={{opacity: showWeatherData ? 1 : 0, position: showWeatherData ? "relative" : "absolute"}}
            >
                <Top temperature={temperature} summary={summary} icon={icon}/>
                <DailyForecastContainer />
            </ReactHeight>
        )
    }
    setFormHeight = (height) => {
        let isFormHeightAlreadySet = this.props.weatherData.get("height")
        if(!isFormHeightAlreadySet) {
            this.props.setFormHeight(height)
        }
    }
    render() {
        let { handleSubmit } = this.props
        let isFetchingWeatherData = this.props.weatherData.get("isFetching")
        let showWeatherData = this.props.weatherData.get("showData")
        let weatherData = this.props.weatherData.get("data")

        return (
            <Form {...this.props}
                  id="weatherForm"  
                  onTransitionEnd={this.handleHeightAnimation.bind(this)}
                  onHeightReady={(height) => this.setFormHeight(height)}
            >
                <Field name="location" 
                       component={Input}
                       type="text" 
                       placeholder="Enter an address..."
                       loading={isFetchingWeatherData}  />
                { weatherData ? this.renderWeatherData(showWeatherData) : null }
                <Wrapper>
                    <WeatherButton onClick={handleSubmit(this.handleSubmit.bind(this))}>
                        {showWeatherData ? "New Location" : "Get Weather"}
                    </WeatherButton>
                    <WeatherButton onClick={this.props.fetchCurrentLocationWeatherData}>My Location</WeatherButton>
                </Wrapper>
            </Form>
        )
    }
}

function mapStateToProps(state) {
    let data = state.weatherData.get("data")
    let temperature = data ? weatherDataSelectors.selectTemperature(data) : false
    let timezone = data ? weatherDataSelectors.selectTimezone(data) : false
    let humidity = data ? weatherDataSelectors.selectHumidity(data) : false
    let windSpeed = data ? weatherDataSelectors.selectWindSpeed(data) : false
    let rain = data ? weatherDataSelectors.selectRainProbability(data) : false
    let summary = data ? weatherDataSelectors.selectSummary(data) : false
    let icon = data ? weatherDataSelectors.selectIcon(data) : false
    return {
        weatherData: state.weatherData,
        temperature,
        timezone,
        humidity,
        windSpeed,
        rain,
        summary,
        icon
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}
export default reduxForm({
    form: "weatherData",
    fields: ["location"],
})(connect(mapStateToProps, mapDispatchToProps)(WeatherForm))
