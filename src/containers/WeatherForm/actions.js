/* eslint-disable */
import {
    FETCH_WEATHER_DATA,
    FETCH_WEATHER_DATA_SUCCESS,
    FETCH_WEATHER_DATA_ERROR,
    SHOW_WEATHER_DATA,
    COLLAPSE_FORM,
    SET_ERROR_MESSAGE,
} from "./constants"

export function fetchWeatherData(location) {
    return { type: FETCH_WEATHER_DATA, location }
}

export function showWeatherData(bool) {
    return { type: SHOW_WEATHER_DATA, payload: bool }
}

export function collapseForm(bool) {
    return { type: COLLAPSE_FORM, payload: bool }
}

export function setInputError(name, errorMessage) {
    return { type: SET_ERROR_MESSAGE, errorMessage }
}