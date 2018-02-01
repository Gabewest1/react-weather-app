import React from "react"
import { connect } from "react-redux"
import { Route } from "react-router-dom"

import Container from "./Container"
import Home from "../Home"
import NightSky from "../../components/NightSky"
import DaySky from "../../components/DaySky"

import "semantic-ui-icon/icon.min.css"

class App extends React.Component{
    getBackground() {
        //if the time is between 6pm-5am then render a night sky,
        //else render a sky with clouds
        let currentTime = (new Date()).getHours()
        let isNightTime = currentTime >= 18 || currentTime <= 5
        let BackgroundComponent = isNightTime ? NightSky : DaySky

        this.props.dispatch({ type: "IS_NIGHTTIME", payload: isNightTime })

        return BackgroundComponent
    }
    render() {
        let BackgroundComponent = this.getBackground()

        return (
            <Container>
                <BackgroundComponent />
                <Route path="/" component={Home} />
            </Container>
        )
    }
}

export default connect()(App)