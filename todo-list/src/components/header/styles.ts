import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
color: gray;
width: 100%;
height: 10%;
`

export const Data = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
h1{
    font-size: 3rem;
    
}
div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
}
+h1{
    font-size: 1.5rem;
    font-weight: 400;
}
`