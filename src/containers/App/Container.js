import styled from "styled-components"

export default styled.div`
    height: 100%;
    // background-image: url(/assets/images/skyline.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    iframe {
        position: absolute;
        pointer-events: none;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        z-index: -1;
    }
    
`