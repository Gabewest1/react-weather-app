import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import DailyForecast from "../../components/DailyForecast"
import Wrapper from "./Wrapper"

import * as weatherDataSelectors from "../WeatherForm/selectors"

class DailyForecastContainer extends React.Component {
    createDailyForecasts() {
        let weeklyForecastData = this.props.weeklyForecastData

        let forecasts = weeklyForecastData.map((dailyForecastData, key) => {
            let { summary, icon, precipProbability, rain, apparentTemperatureMax, apparentTemperatureMin } = dailyForecastData
            let dailyForecastProps = { summary, icon, precipProbability, rain, maxTemp:apparentTemperatureMax, minTemp:apparentTemperatureMin }
            return (
                <DailyForecast key={key} {...dailyForecastData} />
            )
        })

        return forecasts
    }
    render() {
        return (
            <Wrapper>
                { this.createDailyForecasts() }
            </Wrapper>
        )
    }
}


function mapStateToProps(state) {
    let data = state.weatherData.get("data")

    //If no data has been fetched from the weather API 
    //then return false and dont run the select functions
    let temperature = data ? weatherDataSelectors.selectTemperature(data) : false
    let timezone = data ? weatherDataSelectors.selectTimezone(data) : false
    let humidity = data ? weatherDataSelectors.selectHumidity(data) : false
    let windSpeed = data ? weatherDataSelectors.selectWindSpeed(data) : false
    let rain = data ? weatherDataSelectors.selectRainProbability(data) : false
    let summary = data ? weatherDataSelectors.selectSummary(data) : false
    let icon = data ? weatherDataSelectors.selectIcon(data) : false
    let weeklyForecastData = data ? weatherDataSelectors.selectWeeklyForecastData(data) : false

    return {
        weatherData: state.weatherData,
        temperature,
        timezone,
        humidity,
        windSpeed,
        rain,
        summary,
        icon,
        weeklyForecastData
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(actions, dispatch)
// }

export default connect(mapStateToProps, null)(DailyForecastContainer)