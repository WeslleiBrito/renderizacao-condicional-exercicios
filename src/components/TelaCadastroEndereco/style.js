import styled from "styled-components"; 

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    gap: 2vh;
`

export const Input = styled.input`
    padding: 8px;
    outline: none;
    width: 20vw;
`
export const LableInput = styled.label`
`

export const RegisterButton = styled.button`
    background-color: white;
    border-radius: 8px;
    cursor: pointer;
    width: 200px;
    padding: 10px;
    :hover{
        background-color: orange;
        color: white;
        font-weight: 700;
        border: none;
    }
`

