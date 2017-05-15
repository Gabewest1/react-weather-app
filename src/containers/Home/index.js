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
import { selectTemperature, selectTimezone } from "../../selectors/weatherData"
class Home extends React.Component{
    handleSubmit(values) {
        console.log(values)
        let { location } = values
        this.props.fetchWeatherData(location)
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