import styled from "styled-components"
import { ReactHeight } from "react-height"
import { primary } from "../../theme/colors"

const Form = styled(ReactHeight)`
    box-sizing: border-box;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: ${(props) => getHeight(props)};
    width: 80%;
    padding: 30px 10px;
    transition: height 1s ease-in-out;
    background-color: rgba(55, 55, 55, .8);
    border-radius: 10px;
`

function getHeight(props) {
    const NORMAL_HEIGHT = "12.5em"
    const EXPANDED_HEIGHT = props.weatherData.get("heightToCollapse") + props.weatherData.get("height")+"px"
    console.log(props.weatherData.get("heightToCollapse"), props.weatherData.get("height"))
    let { collapsed } = props.weatherData.toJS()

    if(collapsed) {
        return NORMAL_HEIGHT || "500px"
    } else {
        console.log("Expanding height to:", EXPANDED_HEIGHT)
        return EXPANDED_HEIGHT || "500px"
    }
}
export default Form