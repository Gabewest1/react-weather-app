import weatherData from "./containers/WeatherForm/reducer"
import { reducer as form } from "redux-form"
import isNightTime from "./containers/App/reducer"

export default {
    weatherData,
    form,
    isNightTime
}