import styled from "styled-components"
import { ReactHeight } from "react-height"
import { primary } from "../../theme/colors"

const Form = styled(ReactHeight)`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: ${(props) => getHeight(props)};
    width: 80%;
    max-width: 609px;
    padding: 10px;
    transition: height 1s ease-in-out;
    background-color: ${({ isNightTime }) => isNightTime ? "#35323280" : "lightblue"};
    border-radius: 10px;
`

function getHeight(props) {
    const NORMAL_HEIGHT = "120px"
    let EXPANDED_HEIGHT = props.weatherData.get("heightToCollapse") + props.weatherData.get("height") +"px"
    let { collapsed } = props.weatherData.toJS()

    if(collapsed) {
        return NORMAL_HEIGHT
    } else {
        return EXPANDED_HEIGHT
    }
}

export default Form
