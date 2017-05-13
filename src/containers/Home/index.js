import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "../../actions/weatherData"

class Home extends React.Component{
    componentDidMount() {
        this.props.fetchWeatherData()
    }
    render() {
        const text = this.props.weatherData.get("isFetching") ? "Loading Data..." : JSON.stringify(this.props.weatherData.get("data"))

        return (
            <div>
                <p>
                    {text}
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        weatherData: state.weatherData
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)