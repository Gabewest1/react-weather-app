/* eslint-disable */
import {
    FETCH_WEATHER_DATA,
    FETCH_WEATHER_DATA_SUCCESS,
    FETCH_WEATHER_DATA_ERROR,
    SHOW_WEATHER_DATA,
    COLLAPSE_FORM,
    ANIMATE_FORM_HEIGHT_START,
    ANIMATE_FORM_HEIGHT_END,
    FETCH_CURRENT_LOCATION_WEATHER_DATA,
    SET_FORM_COLLAPSE_AMOUNT,
    SET_FORM_HEIGHT,
    SET_CELCIUS_MODE
} from "./constants"

export function fetchWeatherData(location) {
    return { type: FETCH_WEATHER_DATA, location }
}

export function fetchCurrentLocationWeatherData() {
    return { type: FETCH_CURRENT_LOCATION_WEATHER_DATA }
}

export function showWeatherData(bool) {
    return { type: SHOW_WEATHER_DATA, payload: bool }
}

export function collapseForm(bool) {
    return { type: COLLAPSE_FORM, payload: bool }
}

export function startFormHeightAnimation() {
    return { type: ANIMATE_FORM_HEIGHT_START }
}

export function endFormHeightAnimation() {
    return { type: ANIMATE_FORM_HEIGHT_END }
}

export const setHeightToCollapse = (height) => ({ type: SET_FORM_COLLAPSE_AMOUNT, height })
export const setFormHeight = (height) => ({ type: SET_FORM_HEIGHT, height })
export const setCelciusMode = (mode) => ({ type: SET_CELCIUS_MODE, payload: mode })