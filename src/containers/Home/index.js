import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

//import components
import { reduxForm } from "redux-form/immutable"
import Container from "./Container"
import WeatherForm from "../WeatherForm"

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
        return (
            <Container>
                <WeatherForm />
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)