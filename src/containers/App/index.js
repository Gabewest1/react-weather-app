import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import logo from './logo.svg';
import './App.css';
import * as actions from "../../actions/weatherData"

class App extends React.Component{
    componentDidMount() {
        this.props.fetchWeatherData()
    }
    render() {
        console.log(this.props.weatherData.get("data"))
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                    
                </div>
                <p className="App-intro">
                    {JSON.stringify(this.props.weatherData.get("data"))}
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
export default connect(mapStateToProps, mapDispatchToProps)(App)