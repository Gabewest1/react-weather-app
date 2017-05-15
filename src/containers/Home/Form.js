import styled from "styled-components"

const Form = styled.form`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    height: ${(props) => getHeight(props)};
    transition: height 1s ease-in-out;
 
    background-image: 
        /* gloss gradient */
        -webkit-gradient(
            linear, 
            left bottom, 
            left top, 
            color-stop(50%,rgba(255,255,255,0)), 
            color-stop(50%,rgba(255,255,255,0.3)), 
            color-stop(100%,rgba(255,255,255,0.2))),
        
        /* dark outside gradient */
        -webkit-gradient(
            linear, 
            left top, 
            right top, 
            color-stop(0%,rgba(210,210,210,0.3)), 
            color-stop(20%,rgba(210,210,210,0)), 
            color-stop(80%,rgba(210,210,210,0)), 
            color-stop(100%,rgba(210,210,210,0.3))),
        
        /* light inner gradient */
        -webkit-gradient(
            linear, 
            left top, 
            right top, 
            color-stop(0%,rgba(255,255,255,0)), 
            color-stop(20%,rgba(255,255,255,0.5)), 
            color-stop(80%,rgba(255,255,255,0.5)), 
            color-stop(100%,rgba(255,255,255,0))),        
        
        /* diagonal line pattern */
        -webkit-gradient(
            linear, 
            0% 100%, 
            100% 0%, 
            color-stop(0%,rgba(255,255,255,0)), 
            color-stop(40%,rgba(255,255,255,0)), 
            color-stop(40%,#D2D2D1), 
            color-stop(60%,#D2D2D1), 
            color-stop(60%,rgba(255,255,255,0)), 
            color-stop(100%,rgba(255,255,255,0)));
    
        -webkit-box-shadow:
            0px -1px #fff, /* top highlight */
            0px 1px 1px #FFFFFF; /* bottom edge */
        
        -webkit-background-size: 100%, 100%, 100%, 4px 4px;

`

function getHeight(props) {
    const NORMAL_HEIGHT = "120px"
    const IS_FETCHING_HEIGHT = "160px"
    const EXPANDED_HEIGHT = "90%"
    console.log("form props",props)
    let { isFetching, data, showData } = props.weatherData.toJS()

    if(isFetching) {
        return IS_FETCHING_HEIGHT
    } else if(data && showData) {
        return EXPANDED_HEIGHT
    } else {
        return NORMAL_HEIGHT
    }
}
export default Form