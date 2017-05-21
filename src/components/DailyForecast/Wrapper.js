import styled from "styled-components"
import { primary, tertiary } from "../../theme/colors"
console.log("tertiary:", tertiary)
export default styled.div`
    background-color: ${primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 5px ${tertiary};
    width: 10vw;
    h1 {
        font-size: 1.5vw;
    }
    // img {
    //     flex: 0 0 30%;
    // }
`