import React from "react"
import styled from "styled-components"

const LoaderIcon = styled.i`
    color: black;
    display: inline-box;
    position: absolute;
    right: 10px;
`
export default (props) => {
    let classNames = "spinner icon"
    if(props.loading) {
        classNames += " loading"
    }
    return (
        <LoaderIcon className={classNames} />
    )
}