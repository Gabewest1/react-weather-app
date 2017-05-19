import React from "react"
import styled from "styled-components"
import { Field } from "redux-form/immutable"
import Wrapper from "./Wrapper"
import LoaderIcon from "./LoaderIcon"

const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    padding: 10px 15px;
    border-radius: 10px;
    outline: none;
    border-color: ${({meta: {error}}) => error ? "red" : ""};
    &::placeholder {
        color: ${({meta: {error}}) => error ? "red" : ""};
    } 
`

export default (props) => {
    let { loading, placeholder, meta: { error, visited } } = props
    let placeholderText = error ? error : placeholder

    return (
        <Wrapper>
            <Input {...props} {...props.input} placeholder={placeholderText} />
            <LoaderIcon loading={loading} />
        </Wrapper>
    )
}