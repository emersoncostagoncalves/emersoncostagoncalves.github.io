import styled from "styled-components";

export const Container = styled.div`

display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
width: 100%;
height: 70%;
gap: 1rem;

`

export const TaskInput = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
min-height:48px;
border-radius: 5px;
overflow: hidden;
border: 1px solid #e4e4e4;
@media (max-width: 767px){
    min-height:40px; 
}
input{
    width: 92%;
    height: 40px;
    border: none;
    padding: 1rem;
    outline:none;
    
}
button{
    width: 8%;
    height: 100%;
    display: flex;
    justify-content: center;    
    align-items: center;
    background-color: #4DA6B3;
    border: none;
    cursor: pointer;
    :hover{
        svg{
            transform: scale(1.1)
        }
    }
}
`
export const TasksContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex;
flex-direction: column;
width: 100%;
height: 90%;
overflow-y: scroll;
gap: 1rem;
padding-bottom: 1rem;


p{
    font-size: 0.9rem;
    color: #8a8a8a;
    font-weight: 400;
}
span{
    text-decoration: underline;
    cursor: pointer;
}
`