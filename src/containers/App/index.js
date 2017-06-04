import React from "react"
import { Route } from "react-router-dom"

import Container from "./Container"
import Home from "../Home"
import NightSky from "../../components/Stars"


import "semantic-ui-icon/icon.min.css"

class App extends React.Component{
    render() {
        return (
            <Container>
                <NightSky />  
                <Route path="/" component={Home} />
            </Container>
        )
    }
}

export default App