import styled from "styled-components"
import { primary } from "../../theme/colors"

const Form = styled.div`
    box-sizing: border-box;
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
    const EXPANDED_HEIGHT = "70%"
    let { collapsed } = props.weatherData.toJS()

    if(collapsed) {
        return NORMAL_HEIGHT
    } else {
        return EXPANDED_HEIGHT
    }
}
export default Form