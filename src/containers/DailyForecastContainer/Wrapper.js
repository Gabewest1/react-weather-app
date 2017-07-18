import styled from "styled-components"
import { primary } from "../../theme/colors"

export default styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > * {
        border-top: solid thin ${primary};
        border-right: solid thin ${primary};

        &:last-child {
            border-right: none;
        }
    }
`