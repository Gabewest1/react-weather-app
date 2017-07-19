import {  delay } from "redux-saga"
import { takeEvery, take, put, call, select } from "redux-saga/effects"
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
} from "./constants"

export function* watchFetchWeatherData() {
    yield takeEvery(FETCH_WEATHER_DATA, fetchLocationData)
}
export function* watchFetchCurrentLocationWeatherData() {
    yield takeEvery(FETCH_CURRENT_LOCATION_WEATHER_DATA, getCurrentLocation)
}
export function* watchFormHeightAnimationStart() {
    yield takeEvery(ANIMATE_FORM_HEIGHT_START, startFormHeightAnimation)
}

export function* startFormHeightAnimation(action) {
    const state = yield select()
    const collapsed = state.weatherData.get("collapsed")
    const hasCollapseAmountBeenSet = state.weatherData.get("heightToCollapse")

    if(collapsed) {
        yield put({ type: SHOW_WEATHER_DATA, payload: false })       

        if(!hasCollapseAmountBeenSet) {
            console.log(hasCollapseAmountBeenSet)
            yield take(SET_FORM_COLLAPSE_AMOUNT)
        }
        
        yield put({ type: COLLAPSE_FORM, payload: false })

        
    } else {
        yield put({ type: COLLAPSE_FORM, payload: true })
        yield put({ type: SHOW_WEATHER_DATA, payload: false })
    }


}
export function* endFormHeightAnimation(action) {
    const state = yield select()
    const collapsed = state.weatherData.get("collapsed")
    const data = state.weatherData.get("data")

    if(!collapsed) {
        yield put({ type: SHOW_WEATHER_DATA, payload: true })
    } else if(collapsed && data) {
        yield startFormHeightAnimation()
        console.log("Form just collapsed and is re-opening")
        yield take(ANIMATE_FORM_HEIGHT_END)
        console.log("Form has reopened!!! :DDDDDDDD")
        yield put({ type: SHOW_WEATHER_DATA, payload: true })
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
        let locationInfo = yield response.json()
        let address = locationInfo.results[0].formatted_address
        console.log("address", address)

        yield fetchLocationData({location: address})
    } catch(e) {
        console.log(e)
    }
}
export function* fetchLocationData(action) {
    const { location } = action
    console.log("location:", location)
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
        
        yield put({type: FETCH_WEATHER_DATA_SUCCESS, data})
        console.log("Waiting for form height animation")
        yield startFormHeightAnimation()
        yield take(ANIMATE_FORM_HEIGHT_END)
        yield endFormHeightAnimation()
        console.log("form height animation finished")
    
    } catch(e) {
        console.log(e)
        yield put({type: FETCH_WEATHER_DATA_ERROR})        
    }
}