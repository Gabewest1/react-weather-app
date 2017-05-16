import { watchFetchWeatherData } from "./containers/WeatherForm/sagas"

export default function* rootSaga() {
    yield [
        watchFetchWeatherData()
    ]
}