import styled from "styled-components";


export const Container = styled.div`
  display:flex;
  flex-direction: column;
  box-sizing: border-box;
  text-align: center;
  background-color: white;
  max-width: 800px;
  max-height: 650px;
  width: 80%;
  height: 100%;
  padding: 2rem;
  overflow: hidden;
  box-shadow: 10px 10px 80px rgba(0,0,0,.05);
  gap:1rem;
  @media (max-width: 767px){
        padding-top: 4rem;
        width: 100%;
        height: 100%;
        max-height: 100%;
    }
`

interface RowsProps {
    height: number
    direction?: string
    mobileH: number
    justify?: string
}

export const Rows = styled.div<RowsProps>`
display: flex;
flex-direction: ${props => props.direction ?? "row"};
justify-content: ${props => props.justify ?? "space-between"};
align-items: flex-start;
width: 100%;
height: ${props => props.height + "%"};
//background-color: red;
@media (max-width: 767px){
        width: 100%;
        height: ${props => props.mobileH+"%"};
        gap: 0.5rem;
        
    }

`

interface ItemsProps {
    width: number
    height: number
}

export const Items = styled.div<ItemsProps>`
display: flex;
width: ${props => props.width + "%"};
height: ${props => props.height + "%"};
background-color: #dbdbdb;
border-radius: 50px;
background-image: linear-gradient(
    -90deg,
    #e4e4e4 0%,
    #f8f8f8 50%,
    #e4e4e4 100%
);
background-size: 400% 400%;
animation: shimmer 1.2s ease-in-out infinite;

@keyframes shimmer {
    0%{
        background-position: 0% 0%;
    }
    100%{
        background-position: -135% 0%;
    }
}
`
