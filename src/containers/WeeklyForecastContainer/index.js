import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import DailyForecast from "../../components/DailyForecast"
import Wrapper from "./Wrapper"

import * as weatherDataSelectors from "../WeatherForm/selectors"
import convertFahrenheitToCelcius from "../../lib/convertFahrenheitToCelcius"

class WeeklyForecastContainer extends React.Component {
    createDailyForecasts() {
        let { celciusMode, weeklyForecastData, tempSymbol } = this.props

        let forecasts =
             weeklyForecastData
                .filter((x, index) => index < 7)
                .map((dailyForecastData, key) => {
                    let { summary, icon, precipProbability, rain, apparentTemperatureMax, apparentTemperatureMin } = dailyForecastData

                    if (celciusMode) {
                        apparentTemperatureMax = convertFahrenheitToCelcius(apparentTemperatureMax)
                        apparentTemperatureMin = convertFahrenheitToCelcius(apparentTemperatureMin)
                    }

                    let day = weatherDataSelectors.selectDayOfTheWeek(key) 
                    let dailyForecastProps = { day, summary, tempSymbol, icon, precipProbability, rain, maxTemp:apparentTemperatureMax, minTemp:apparentTemperatureMin }

                    return (
                        <DailyForecast key={key} {...dailyForecastProps} />
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

    let weeklyForecastData = data ? weatherDataSelectors.selectWeeklyForecastData(data) : false

    return {
        weeklyForecastData,
        tempSymbol: weatherDataSelectors.selectTempSymbol(state),
        celciusMode: weatherDataSelectors.selectCelciusMode(state)
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(actions, dispatch)
// }

export default connect(mapStateToProps, null)(WeeklyForecastContainer)