import { takeEvery } from "redux-saga"
import { put, call } from "redux-saga/effects"
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
    const url = 'https://jsonplaceholder.typicode.com/posts/1'
    try {
        const response = yield call(fetch, url)
        const data = yield response.json()
        console.log(response)

        yield put({type: FETCH_WEATHER_DATA_SUCCESS, data})
    } catch(e) {
        console.log(e)
    }
}