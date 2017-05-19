import { createSelector } from "reselect"

export const selectTemperature = (state) => state.currently.temperature
export const selectTimezone = (state) => state.timezone
export const selectHumidity = (state) => state.currently.humidity
export const selectWindSpeed = (state) => state.currently.windSpeed
export const selectRainProbability = (state) => state.currently.precipProbability
export const selectSummary = (state) => state.currently.summary
export const selectIcon = (state) => state.currently.icon
export const selectWeeklyForecast = (state) => state.daily
export const selectWeeklyForecastData = (state) => state.daily.data