import React from "react"
import styled from "styled-components"
import { Field } from "redux-form/immutable"


export default (props) => {
    let { name, component, type, placeholder, error } = props
    let inputProps = {name, component, type, placeholder}
    const Input = styled(Field)`
        box-sizing: border-box;
        width: 100%;
        padding: 10px 15px;
        border-radius: 10px;
        outline: none;
        border-color: ${error ? "red" : ""};
        
        &::placeholder {
            color: ${error ? "red" : ""};
        } 
    `
    return (
        <Input {...inputProps} placeholder={error ? error : placeholder} />
    )
}