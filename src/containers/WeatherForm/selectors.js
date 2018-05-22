import { createSelector } from "reselect"
import convertFahrenheitToCelcius from "../../lib/convertFahrenheitToCelcius"

export const selectTemperatureData = (state) => {
    let thereIsData = state.weatherData.get("data")
    
    if (thereIsData) {
        return thereIsData.currently.temperature
    } else {
        return null
    }
}
export const selectTimezone = (state) => state.timezone
export const selectHumidity = (state) => state.currently.humidity
export const selectWindSpeed = (state) => state.currently.windSpeed
export const selectRainProbability = (state) => state.currently.precipProbability
export const selectSummary = (state) => state.currently.summary
export const selectIcon = (state) => state.currently.icon
export const selectWeeklyForecast = (state) => state.daily
export const selectWeeklyForecastData = (state) => state.daily.data
export const selectCelciusMode = (state) => state.weatherData.get("celciusMode")
export const selectDayOfTheWeek = (index) => {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
    let today = new Date().getDay()
    let dayOfTheWeek = (today + index) % days.length

    return index === 0 ? "Today" :
           index === 1 ? "Tmrw" :
           days[dayOfTheWeek]
}
export const selectTemperature = createSelector(
    selectTemperatureData,
    selectCelciusMode,
    (temp, convertToCelcius) => {
        if (temp) {
            return convertToCelcius ? convertFahrenheitToCelcius(temp) : temp
        } else {
            return null
        }
    }
)
export const selectTempSymbol = createSelector(
    selectCelciusMode,
    (isCelciusMode) => isCelciusMode ? "c": "f"
)
