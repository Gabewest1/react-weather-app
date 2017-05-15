import React from "react"
import { Route } from "react-router-dom"

import Container from "./Container"
import Home from "../Home"

class App extends React.Component{
    render() {
        return (
            <Container>
                <Route path="/" component={Home} />
            </Container>
        )
    }
}

export default App