/* eslint-disable */
import {
    FETCH_WEATHER_DATA,
    FETCH_WEATHER_DATA_SUCCESS,
    FETCH_WEATHER_DATA_ERROR,
    SHOW_WEATHER_DATA,
    COLLAPSE_FORM,
    ANIMATE_FORM_HEIGHT_START,
    ANIMATE_FORM_HEIGHT_END,
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

export function startFormHeightAnimation() {
    return { type: ANIMATE_FORM_HEIGHT_START }
}

export function endFormHeightAnimation() {
    return { type: ANIMATE_FORM_HEIGHT_END }
}