import {  delay } from "redux-saga"
import { takeEvery, put, call } from "redux-saga/effects"
import DarkSky from "dark-sky"
const forecast = new DarkSky("acd83c929d2788063970e328f6b26794")

import {
    FETCH_WEATHER_DATA,
    FETCH_WEATHER_DATA_SUCCESS,
    FETCH_WEATHER_DATA_ERROR,
    SHOW_WEATHER_DATA,
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
    const { location } = action
    const apiKey = "AIzaSyBlEuzRfwGV7IIIpUtefZWzHTg5Ip6UO3E"
    const googleGeocoderApiUrl = 
            `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${apiKey}`

    try {
        const locationInfoResponse = yield call(fetch, googleGeocoderApiUrl)
        const locationInfo = yield locationInfoResponse.json()
        const { lat, lng } = locationInfo.results[0].geometry.location

        const weatherApiUrl = `c373bad511a5643591596847902ff1b2/${lat+","+lng}`
        const response = yield call(fetch, weatherApiUrl)
        const data = yield response.json()

        yield put({type: FETCH_WEATHER_DATA_SUCCESS, data})
        yield delay(1000)
        yield put({type: SHOW_WEATHER_DATA, payload: true})
    } catch(e) {
        console.log(e)
        yield put({type: FETCH_WEATHER_DATA_ERROR})        
    }
}