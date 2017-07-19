import { fromJS } from "immutable"
import {
    FETCH_WEATHER_DATA,
    FETCH_WEATHER_DATA_SUCCESS,
    FETCH_WEATHER_DATA_ERROR,
    FETCH_CURRENT_LOCATION_WEATHER_DATA,
    SHOW_WEATHER_DATA,
    COLLAPSE_FORM,
    SET_FORM_COLLAPSE_AMOUNT,
    SET_FORM_HEIGHT,
} from "./constants"

let initialState = fromJS({
    collapsed: true,
    height: undefined,
    heightToCollapse: undefined,
    isFetching: false,
    data: false,
    showData: false,
    error: false,
})

export default function weatherData(state = initialState, action) {
    switch(action.type) {
        case FETCH_CURRENT_LOCATION_WEATHER_DATA:
            return state.set("isFetching", true)
        case FETCH_WEATHER_DATA:
            return state.set("isFetching", true)
        case FETCH_WEATHER_DATA_SUCCESS: 
            return state.set("data", action.data).set("isFetching", false)
        case FETCH_WEATHER_DATA_ERROR: 
            return state.set("error", true).set("isFetching", false)
        case SHOW_WEATHER_DATA: 
            return state.set("showData", action.payload)
        case COLLAPSE_FORM: 
            return state.set("collapsed", action.payload)
        case SET_FORM_COLLAPSE_AMOUNT:
            return state.set("heightToCollapse", action.height)
        case SET_FORM_HEIGHT:
            return state.set("height", action.height)
        default:
            return state
    }
}