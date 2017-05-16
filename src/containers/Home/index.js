import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import zips from "zips"

//import components
import { Field, reduxForm } from "redux-form/immutable"
import Container from "./Container"
import WeatherButton from "./WeatherButton"
import Form from "./Form"
import Input from "./Input"

//import actions and selectors
import * as actions from "../../actions/weatherData"
import * as weatherDataSelectors from "../../selectors/weatherData"
class Home extends React.Component {
    handleSubmit(values) {
        let { location } = values
        let showData = this.props.weatherData.get("showData")

        //if the weather has already been previously queried and is currently being displayed,
        //then hide the data so the user can make another query. Otherwise, query for the new weather 
        //data
        if(showData) {
            this.props.showWeatherData(false)
        } else {
            this.props.fetchWeatherData(location)
        }
    }
    renderWeatherData() {
        let { 
            temperature,
            timezone,
            humidity,
            windSpeed,
            rain,
            summary,
            icon 
        } = this.props
        return (
            <ul>
                <li>Summary: {summary} </li>
                <li>Timezone: {timezone} </li>
                <li>Temperature: {temperature} </li>
                <li>Humidity: {humidity} </li>
                <li>Wind Speed: {windSpeed} </li>
                <li>Chance of Rain: {rain} </li>
                <li>Icon to display: {icon} </li>
            </ul>
        )
    }

    render() {
        let { handleSubmit } = this.props
        let isFetchingWeatherData = this.props.weatherData.get("isFetching")
        let showWeatherData = this.props.weatherData.get("showData")

        return (
            <Container>
                <Form {...this.props} onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                    <Input name="location" component="input" type="text" placeholder="zip, city, coordinates..."  />
                    {   
                        isFetchingWeatherData ? "Loading Data..." :
                        !showWeatherData ? null :
                        this.renderWeatherData()
                    }
                    <WeatherButton>{showWeatherData ? "New Location" : "Get Weather"}</WeatherButton>
                </Form>
            </Container>
        );
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
console.log(new Home())
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}
export default reduxForm({
    form: "weatherData",
    fields: ["location"],
})(connect(mapStateToProps, mapDispatchToProps)(Home))