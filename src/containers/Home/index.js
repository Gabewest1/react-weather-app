import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import zips from "zips"

import { Field, reduxForm } from "redux-form/immutable"
import Container from "./Container"
import WeatherButton from "./WeatherButton"
import Form from "./Form"
import Input from "./Input"

import * as actions from "../../actions/weatherData"
import { selectTemperature, selectTimezone } from "../../selectors/weatherData"
class Home extends React.Component{
    handleSubmit(values) {
        console.log(values)
        let { location } = values
        let zipCodeRegex = /^[0-9]{5}$/g
        let cityNameRegex = /\w/g
        let isZipCode = zipCodeRegex.test(location)
        let isCity = cityNameRegex.test(location)

        if(isZipCode) {
            let {lat, long} = zips.getByZipCode(location)
            console.log(lat, long)
            this.props.fetchWeatherData({lat, long})
        } else if(isCity) {
            console.log("isCity entered", location)
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyBlEuzRfwGV7IIIpUtefZWzHTg5Ip6UO3E`)
                .then(response => response.json())
                .then(data => {
                    let { lat, lng} = data.results[0].geometry.location
                    console.log("city lat, lng: ", lat, lng)
                    this.props.fetchWeatherData({ lat, long: lng })
                })
                .catch(err => console.log(err))
        } else {
            let [lat, long] = location.trim().split(/[\s|,]/g)
            this.props.fetchWeatherData({lat, long})
        }
    }
    renderWeatherData() {
        let { temperature, timezone } = this.props
        return (
            <p>
                Timezone: {timezone} <br />
                Temperature: {temperature}
            </p>
        )
    }
    render() {
        let { handleSubmit } = this.props

        return (
            <Container>
                <Form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                    <Input name="location" component="input" type="text" placeholder="zip, city, coordinates..."  />
                    
                    {this.props.weatherData.get("isFetching") ? (<p>"Loading Data..."</p>) : this.renderWeatherData()}
                    <WeatherButton>Get Weather</WeatherButton>
                </Form>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    let data = state.weatherData.get("data")
    let temperature = data ? selectTemperature(data) : false
    let timezone = data ? selectTimezone(data) : false
    return {
        weatherData: state.weatherData,
        temperature,
        timezone
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}
export default reduxForm({
    form: "weatherData",
    fields: ["location"]
})(connect(mapStateToProps, mapDispatchToProps)(Home))