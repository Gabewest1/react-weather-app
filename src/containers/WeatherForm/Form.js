import styled from "styled-components"

const Form = styled.form`
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
    background-color: rgba(205,205,205, .8);
    border-radius: 10px;
    // background-image: 
    //     /* gloss gradient */
    //     -webkit-gradient(
    //         linear, 
    //         left bottom, 
    //         left top, 
    //         color-stop(50%,rgba(255,255,255,0)), 
    //         color-stop(50%,rgba(255,255,255,0.3)), 
    //         color-stop(100%,rgba(255,255,255,0.2))),
        
    //     /* dark outside gradient */
    //     -webkit-gradient(
    //         linear, 
    //         left top, 
    //         right top, 
    //         color-stop(0%,rgba(210,210,210,0.3)), 
    //         color-stop(20%,rgba(210,210,210,0)), 
    //         color-stop(80%,rgba(210,210,210,0)), 
    //         color-stop(100%,rgba(210,210,210,0.3))),
        
    //     /* light inner gradient */
    //     -webkit-gradient(
    //         linear, 
    //         left top, 
    //         right top, 
    //         color-stop(0%,rgba(255,255,255,0)), 
    //         color-stop(20%,rgba(255,255,255,0.5)), 
    //         color-stop(80%,rgba(255,255,255,0.5)), 
    //         color-stop(100%,rgba(255,255,255,0))),        
        
    //     /* diagonal line pattern */
    //     -webkit-gradient(
    //         linear, 
    //         0% 100%, 
    //         100% 0%, 
    //         color-stop(0%,rgba(255,255,255,0)), 
    //         color-stop(40%,rgba(255,255,255,0)), 
    //         color-stop(40%,#D2D2D1), 
    //         color-stop(60%,#D2D2D1), 
    //         color-stop(60%,rgba(255,255,255,0)), 
    //         color-stop(100%,rgba(255,255,255,0)));
    
    //     -webkit-box-shadow:
    //         0px -1px #fff, /* top highlight */
    //         0px 1px 1px #FFFFFF; /* bottom edge */
        
    //     -webkit-background-size: 100%, 100%, 100%, 4px 4px;

`

function getHeight(props) {
    const NORMAL_HEIGHT = "200px"
    const EXPANDED_HEIGHT = "90%"
    let { collapsed } = props.weatherData.toJS()

    if(collapsed) {
        return NORMAL_HEIGHT
    } else {
        return EXPANDED_HEIGHT
    }
}
export default Form