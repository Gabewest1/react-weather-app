import React from "react"
import styled from "styled-components"
import { primary, primary2 } from "../../theme/colors"

//Styling for the size of the font for the button is located in the `span` element
const Button = styled.button`
    box-sizing: border-box;
    outline: none;
    padding: 0;
    flex: 0 1 45%;
    white-space: nowrap;    
    border-radius: 10px;
    box-shadow: 
        0px 3px 3px 3px rgba(50, 50, 50, 1);
        
    
    transition: box-shadow .1s ease-in-out;
    width: 100%;

    &:active {
        -webkit-box-shadow: 
            0px 50px rgba(10,10,10,1),
            

            span {
                -webkit-transform: translate(0, 3px); /* depth of button press */
                
            }
    }
`

const Span = styled.span`
    background-color: #E8E8E8;
    width: 100%
    max-width: 100%;
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
    
    -webkit-border-radius: 10px;
    -webkit-transition: -webkit-transform .1s ease-in-out;
    
    display: inline-block;
    padding: 10px 0;
    
    color: ${primary};
    text-transform: uppercase;
    font-weight: 700;
    
    text-shadow: 0px 1px #fff, 0px -1px #262F33;
    

    &:hover {
        color: ${primary2};
        text-shadow: 0px -1px #97A63A;
        cursor: pointer;
    }
    
    @media (max-width: 600px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }

`

export default (props) => {
    return (
        <Button {...props}>
            <Span>{props.children}</Span>
        </Button>
    )
}