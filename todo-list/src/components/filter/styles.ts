import styled from "styled-components";

interface ButtonProps{
    filter: string
}


export const Button = styled.button<ButtonProps>`
padding: 0.5rem 1rem;
border-radius: 20px;
border: ${props => props.filter !== "todos" && props.id === props.filter ? "1px solid #4DA6B3" : "1px solid #e4e4e4"} ;
background-color: ${props => props.filter !== "todos" && props.id === props.filter ? "#F7F7F8" : "#ffffff"};
color: ${props => props.filter !== "todos" && props.id === props.filter ? "#4DA6B3" : "#929292"};
cursor: pointer;
`