import {  delay } from "redux-saga"
import { takeEvery, put, call } from "redux-saga/effects"
import DarkSky from "dark-sky"
const forecast = new DarkSky("acd83c929d2788063970e328f6b26794")

import {
    FETCH_WEATHER_DATA,
    FETCH_WEATHER_DATA_SUCCESS,
    FETCH_WEATHER_DATA_ERROR,
} from "../constants"

export default function* rootSaga() {
    yield [
        watchFetchWeatherData()
    ]
}

export function* watchFetchWeatherData() {
    console.log("In watcher function")
    yield takeEvery(FETCH_WEATHER_DATA, fetchWeatherData)
}

export function* fetchWeatherData(action) {
    const {lat, long} = action.location
    const weatherApiUrl = `c373bad511a5643591596847902ff1b2/${lat+","+long}`
    const googleGeocoderApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${action.location}&key=AIzaSyBlEuzRfwGV7IIIpUtefZWzHTg5Ip6UO3E`
    console.log("location and URL: ", location, url)
    try {
        const response = yield call(fetch, url)
        console.log(response)
        const data = yield response.json()
        yield put({type: FETCH_WEATHER_DATA_SUCCESS, data})
    } catch(e) {
        console.log(e)
        yield put({type: FETCH_WEATHER_DATA_ERROR})        
    }
}