import React from "react"
import { Route } from "react-router-dom"
import Home from "../Home"

class App extends React.Component{
    render() {
        return (
            <Route path="/" component={Home} />
        )
    }
}

export default App