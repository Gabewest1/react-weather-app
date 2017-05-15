import { fromJS } from "immutable"
import {
    FETCH_WEATHER_DATA,
    FETCH_WEATHER_DATA_SUCCESS,
    FETCH_WEATHER_DATA_ERROR,
    SHOW_WEATHER_DATA,
} from "../constants"

let initialState = fromJS({
    isFetching: false,
    data: false,
    showData: false,
    error: false
})

export default function weatherData(state = initialState, action) {
    switch(action.type) {
        case FETCH_WEATHER_DATA:
            return state.set("isFetching", true)
        case FETCH_WEATHER_DATA_SUCCESS: 
            return state.set("data", action.data).set("isFetching", false)
        case FETCH_WEATHER_DATA_ERROR: 
            return state.set("error", true).set("isFetching", false)
        case SHOW_WEATHER_DATA: 
            return state.set("showData", action.payload)
        default:
            return state
    }
}