import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
width:100%;
min-height: 50px;
border: 1px solid #e4e4e4;
padding-left: 1rem;
gap:0.5rem;


div{
    display: flex;
    justify-content:flex-end;
    align-items: center;
    width: 15%;
    height: 100%;
    @media (max-width: 767px){
        width: 15%;
    }
    
}
`

interface ButtonOnProps {
    color?: string
    width?: string
    id: string
}

export const ButtonOn = styled.button<ButtonOnProps>`
display: flex;
justify-content:center;
align-items: center;
height: 100%;
border: none;
background-color: ${props => props.color ?? "white"};
width: 100%;
@media (max-width: 767px){
        width: 50%;
        svg{
        transform: scale(0.8)
    }
    }
cursor: pointer;

:hover{
    svg{
        transform: scale(1.05);
    }
    }
 
`

interface ButtonOffProps {
    color?: string
    width?: string
    id: string
    name: string
}

export const ButtonOff = styled.button<ButtonOffProps>`
display: flex;
justify-content:center;
align-items: center;
height: 100%;
border: none;
background-color: ${props => props.color ?? "white"};
width:  ${props => props.width ?? "100%"};
padding-right: 0.5rem;
@media (max-width: 767px){
        width: 50%;
        padding-right: 0rem;
        svg{
        transform: scale(0.8)
    }
    }
svg{
    opacity: 30%
}
cursor: pointer;

:hover{
    svg{
        opacity: 100%;
    }
    
    }

    
`

export const CheckBox = styled.input`
width: 20px;
border: none;
padding: 2rem;

`

interface TextTaskProps {
    state: string
}

export const TextTask = styled.input<TextTaskProps>`
width: 80%;
border: none;
text-decoration: ${props => props.state === "done" ? "line-through" : "none"};
outline: none;
:disabled{
        background-color:none;
    }
@media (max-width: 767px){
        width: 75%;
    }
    
`

