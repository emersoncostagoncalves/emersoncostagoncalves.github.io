import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 80px;
min-height: 80px;

@media (max-width: 767px){
     flex-direction:column-reverse;
     align-items: flex-end;
     gap: 0.5rem;
    }
`

export const Filters = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
height: 100%;
gap: 0.5rem;
`

export const Input = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex: 1;
height: 100%;
padding-left: 1rem;
@media (max-width: 767px){
    padding-left: 0rem;
     width: 100%;
    }
div{
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: white; 
    border-radius: 3px;
    border: 1px solid #e4e4e4;
    padding: 0.4rem 0.8rem;
    input{
        border: none;
        width: 100%;
        :focus{
            outline: none;
        }
    }
   
}
`