import {  delay } from "redux-saga"
import { takeEvery, put, call, select } from "redux-saga/effects"
import {
    FETCH_WEATHER_DATA,
    FETCH_WEATHER_DATA_SUCCESS,
    FETCH_WEATHER_DATA_ERROR,
    SHOW_WEATHER_DATA,
    COLLAPSE_FORM,
    ANIMATE_FORM_HEIGHT_START,
    ANIMATE_FORM_HEIGHT_END,
    FETCH_CURRENT_LOCATION_WEATHER_DATA,
} from "./constants"

export function* watchFetchWeatherData() {
    console.log("In watcher function")
    yield takeEvery(FETCH_WEATHER_DATA, fetchLocationData)
}
export function* watchFetchCurrentLocationWeatherData() {
    console.log("In watcher function")
    yield takeEvery(FETCH_CURRENT_LOCATION_WEATHER_DATA, getCurrentLocation)
}
export function* watchFormHeightAnimationStart() {
    yield takeEvery(ANIMATE_FORM_HEIGHT_START, startFormHeightAnimation)
}
export function* watchFormHeightAnimationEnd() {
    yield takeEvery(ANIMATE_FORM_HEIGHT_END, endFormHeightAnimation)
}

export function* startFormHeightAnimation(action) {
    const state = yield select()
    const collapsed = state.weatherData.get("collapsed")
    if(collapsed) {
        yield put({ type: COLLAPSE_FORM, payload: false })
    } else {
        console.log("COLLAPSE_FORM")
        yield put({ type: COLLAPSE_FORM, payload: true })
        console.log("SHOW_WEATHER_DATA")        
        yield put({ type: SHOW_WEATHER_DATA, payload: false })
    }
}
export function* expandFormAnimation() {
    yield put({ type: COLLAPSE_FORM, payload: false })    
}
export function* collapseFormAnimation() {
    yield put({ type: COLLAPSE_FORM, payload: true })    
}

export function* endFormHeightAnimation(action) {
    console.log("endAnimationHeight")
    const state = yield select()
    const collapsed = state.weatherData.get("collapsed")
    const data = state.weatherData.get("data")

    if(!collapsed) {
        yield put({ type: SHOW_WEATHER_DATA, payload: true })
    } else if(collapsed && data) {
        yield startFormHeightAnimation()
    }
}
export function* getCurrentLocation() {

    try {
        let position = yield new Promise(resolve => {
            navigator.geolocation.getCurrentPosition(position => {
                resolve(position)
            })
        })
        let latLng = {lat: position.coords.latitude, lng: position.coords.longitude}
        const apiKey = "AIzaSyBlEuzRfwGV7IIIpUtefZWzHTg5Ip6UO3E"
        const googleGeocoderApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLng.lat+","+latLng.lng}&key=${apiKey}`
        let response = yield call(fetch, googleGeocoderApiUrl)
        let address = yield response.json()
        console.log("address", address.results[0])
        yield put({ type: FETCH_WEATHER_DATA })
        yield fetchLocationData({location: address.results[0]})
    } catch(e) {
        console.log(e)
    }
}
export function* fetchLocationData(action) {
    console.log("Entered fetchLocationData")
    const { location } = action
    const apiKey = "AIzaSyBlEuzRfwGV7IIIpUtefZWzHTg5Ip6UO3E"
    const googleGeocoderApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${apiKey}`

    try {
        const locationInfoResponse = yield call(fetch, googleGeocoderApiUrl)
        const locationInfo = yield locationInfoResponse.json()
        const { lat, lng } = locationInfo.results[0].geometry.location
        yield fetchWeatherData(lat, lng)
    } catch(e) {
        console.log(e)
        yield put({type: FETCH_WEATHER_DATA_ERROR})        
    }
}

export function* fetchWeatherData(lat, lang) {
    console.log("fetching weather data yooooo")
    try {
        //This url might need to change when i go into production
        const weatherApiUrl = `c373bad511a5643591596847902ff1b2/${lat+","+lang}`
        const response = yield call(fetch, weatherApiUrl)
        const data = yield response.json()

        yield delay(2000)
        yield put({type: FETCH_WEATHER_DATA_SUCCESS, data})
        yield startFormHeightAnimation()
    
    } catch(e) {
        console.log(e)
        yield put({type: FETCH_WEATHER_DATA_ERROR})        
    }
}