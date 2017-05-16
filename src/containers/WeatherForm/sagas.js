import {  delay } from "redux-saga"
import { takeEvery, put, call } from "redux-saga/effects"
import {
    FETCH_WEATHER_DATA,
    FETCH_WEATHER_DATA_SUCCESS,
    FETCH_WEATHER_DATA_ERROR,
    SHOW_WEATHER_DATA,
    COLLAPSE_FORM,
} from "./constants"

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

        yield delay(2000)
        yield put({type: FETCH_WEATHER_DATA_SUCCESS, data})
        yield put({type: COLLAPSE_FORM, payload: false})
        yield delay(1000)
        yield put({type: SHOW_WEATHER_DATA, payload: true})
    } catch(e) {
        console.log(e)
        yield put({type: FETCH_WEATHER_DATA_ERROR})        
    }
}