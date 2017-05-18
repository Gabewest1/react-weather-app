import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

//import components
import Container from "./Container"
import WeatherForm from "../WeatherForm"

//import actions and selectors
import * as actions from "../WeatherForm/actions"

class Home extends React.Component {
    render() {
        return (
            <Container>
                <WeatherForm />
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)