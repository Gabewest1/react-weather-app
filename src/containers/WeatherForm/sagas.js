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
    SET_LOCATION,
} from "./constants"

export function* watchFetchWeatherData() {
    console.log("watchFetchWeatherData")
    yield takeEvery(FETCH_WEATHER_DATA, fetchLocationData)
}
export function* watchFetchCurrentLocationWeatherData() {
    console.log("watchFetchCurrentLocationWeatherData")
    yield takeEvery(FETCH_CURRENT_LOCATION_WEATHER_DATA, fetchCurrentLocationWeatherData)
}
export function* watchFormHeightAnimationStart() {
    console.log("watchFormHeightAnimationStart")
    yield takeEvery(ANIMATE_FORM_HEIGHT_START, startFormHeightAnimation)
}

export function* startFormHeightAnimation(action) {
    console.log("startFormHeightAnimation")
    let state = yield select()
    let collapsed = state.weatherData.get("collapsed")
    
    if(collapsed) {
        yield put({ type: SHOW_WEATHER_DATA, payload: false })       
        yield delay(2000)    //Wait for previous LOC to update the view

        //Get new height of currently hidden element to determine space needed
        //to increase the container by
        let main = document.getElementById("main")
        let height = parseInt(window.getComputedStyle(main).getPropertyValue("height").replace("px", "")) 

        yield put({ type: SET_FORM_COLLAPSE_AMOUNT, height })
        yield put({ type: COLLAPSE_FORM, payload: false })

    } else {
        yield put({ type: COLLAPSE_FORM, payload: true })
        yield put({ type: SHOW_WEATHER_DATA, payload: false })
    }

}
export function* endFormHeightAnimation(action) {
    console.log("endFormHeightAnimation")
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
export function* getAddressOfCoordinates(lat, lng) {
    console.log("getAddressOfCoordinates")
    try {
        const apiKey = "AIzaSyBlEuzRfwGV7IIIpUtefZWzHTg5Ip6UO3E"
        const googleGeocoderApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat+","+lng}&key=${apiKey}`

        let response = yield call(fetch, googleGeocoderApiUrl)
        let locationInfo = yield response.json()

        console.log(locationInfo)
        let address = locationInfo.results[0].formatted_address
        console.log("address", address)

        return address
    } catch(e) {
        console.log(e)
    }

}
export function* fetchCurrentLocationWeatherData() {
    console.log("fetchCurrentLocationWeatherData")
    try {
        let position = yield new Promise(resolve => {
            console.log("About to find your location!", navigator.geolocation.getCurrentPosition)
            navigator.geolocation.getCurrentPosition(position => {
                console.log("Got the position:", position)
                resolve(position)
            }, (err) => console.log("GEOCODE ERROR:", err),
                {timeout: 10000, enableHighAccuracy: true}
            )
        })
        
        let {latitude, longitude} = position.coords

        console.log("Here are the coordinates:", latitude, longitude)
        
        yield fetchWeatherData(latitude, longitude)
    } catch(e) {
        console.log(e)
    }
}
export function* fetchLocationData(action) {
    const { location } = action
    const apiKey = "AIzaSyBlEuzRfwGV7IIIpUtefZWzHTg5Ip6UO3E"
    const googleGeocoderApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${apiKey}`

    try {
        const locationInfoResponse = yield call(fetch, googleGeocoderApiUrl)
        const locationInfo = yield locationInfoResponse.json()
        const { lat, lng } = locationInfo.results[0].geometry.location
        console.log(locationInfo)
        yield fetchWeatherData(lat, lng)
    } catch(e) {
        console.log(e)
        yield put({type: FETCH_WEATHER_DATA_ERROR})        
    }
}
export function* fetchWeatherData(lat, lng) {
    try {
        //This url might need to change when i go into production
        const weatherApiUrl = `c373bad511a5643591596847902ff1b2/${lat+","+lng}`        

        let response = yield call(fetch, weatherApiUrl)
        let data = yield response.json()
        
        let address = yield getAddressOfCoordinates(lat, lng)
        console.log("HERE IS THE ADDRESS AGAIN:", address)
        yield put({ type: FETCH_WEATHER_DATA_SUCCESS, data })
        yield put({ type: SET_LOCATION, location: address })
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