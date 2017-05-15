/* eslint-disable */
import {
    FETCH_WEATHER_DATA,
    FETCH_WEATHER_DATA_SUCCESS,
    FETCH_WEATHER_DATA_ERROR,
} from "../constants"

export function fetchWeatherData(location) {
    return { type: FETCH_WEATHER_DATA, location }
}