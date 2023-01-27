import styled from "styled-components";

export const Container = styled.div`

display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
width: 100%;
height: 70%;
//border: 1px solid #e4e4e4;
gap: 1rem;
`

export const TaskInput = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: auto;
border-radius: 5px;
overflow: hidden;
border: 1px solid #e4e4e4;
input{
    width: 92%;
    height: 40px;
    border: none;
    padding: 1rem;
    
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
height: 100%;
overflow-y: scroll;
gap: 1rem;
p{
    color: #8a8a8a
}
span{
    text-decoration: underline;
    cursor: pointer;
}
`