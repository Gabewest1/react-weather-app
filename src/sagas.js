import { 
    watchFetchWeatherData,
    watchFormHeightAnimationEnd, 
    watchFormHeightAnimationStart,
    watchFetchCurrentLocationWeatherData 
} from "./containers/WeatherForm/sagas"

export default function* rootSaga() {
    yield [
        watchFetchWeatherData(),
        watchFetchCurrentLocationWeatherData(),
        watchFormHeightAnimationEnd(),
        watchFormHeightAnimationStart(),
    ]
}