import { watchFetchWeatherData, watchFormHeightAnimationEnd, watchFormHeightAnimationStart } from "./containers/WeatherForm/sagas"

export default function* rootSaga() {
    yield [
        watchFetchWeatherData(),
        watchFormHeightAnimationEnd(),
        watchFormHeightAnimationStart(),
    ]
}