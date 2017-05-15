import React from "react"
import styled from "styled-components"

const Button = styled.button`
    outline: none;
    padding: 0;
    border-radius: 10px;
    box-shadow: 
        0px 3px rgba(128, 128, 128, 1),
        0px 4px rgba(128, 128, 128, 1),
        0px 5px rgba(128, 128, 128, 1),
        0px 6px rgba(128, 128, 128, 1),
        0px 7px rgba(128, 128, 128, 1),
        0px 8px rgba(128, 128, 128, 1),
        0px 14px 6px -1px rgba(128, 128, 128, 1);
    
    transition: box-shadow .1s ease-in-out;

    &:active {
        -webkit-box-shadow: 
            0px 3px rgba(128,128,128,1),
            0px 4px rgba(118,118,118,1),
            0px 5px rgba(108,108,108,1),
            0px 6px rgba(98,98,98,1),
            0px 7px rgba(88,88,88,1),
            0px 8px rgba(78,78,78,1),
            0px 10px 2px 0px rgba(128,128,128,.6); /* shadow */

            span {
                -webkit-transform: translate(0, 3px); /* depth of button press */
                
            }
    }
`

const Span = styled.span`
    background-color: #E8E8E8;

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
    padding: 10px 40px 10px 40px;
    
    color: #3A474D;
    text-transform: uppercase;
    font-family: 'TradeGothicLTStd-BdCn20','PT Sans Narrow';
    font-weight: 700;
    font-size: 32px;
    
    text-shadow: 0px 1px #fff, 0px -1px #262F33;
    

    &:hover {
        color: #AEBF3B;
        text-shadow: 0px -1px #97A63A;
        cursor: pointer;
    }

    @media (max-width: 480px) {
        font-size: 20px;
    }
`

export default (props) => {
    return (
        <Button>
            <Span>{props.children}</Span>
        </Button>
    )
}