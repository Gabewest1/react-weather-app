import React from "react"
import { Route } from "react-router-dom"

import Container from "./Container"
import Home from "../Home"
import "semantic-ui-icon/icon.min.css"

class App extends React.Component{
    render() {
        return (
            <Container>
                <iframe id="bgFrame" width="560" height="315" src="https://www.youtube.com/embed/yamiiGk6aSs?enablejsapi=1&autoplay=1&controls=0&showinfo=0&" frameborder="0" allowfullscreen></iframe>
                <Route path="/" component={Home} />
            </Container>
        )
    }
}

export default App