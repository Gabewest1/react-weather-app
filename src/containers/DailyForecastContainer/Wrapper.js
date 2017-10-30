import styled from "styled-components"
import { primary2, secondary } from "../../theme/colors"

export default styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${secondary};
    border-radius: 10px;
    border: solid thin ${primary2};
`