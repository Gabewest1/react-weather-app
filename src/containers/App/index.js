import React from "react"
import { Route } from "react-router-dom"

import Container from "./Container"
import Home from "../Home"
import Stars from "../../components/Stars"
import Clouds from "../../components/Clouds"
import Twinkling from "../../components/Twinkling"

import "semantic-ui-icon/icon.min.css"

class App extends React.Component{
    render() {
        return (
            <Container>
                <Stars />   
                <Clouds />  
                <Twinkling />   
                <Route path="/" component={Home} />
            </Container>
        )
    }
}

export default App