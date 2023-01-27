import styled from "styled-components";

export const Container = styled.div`
background-color: #e4e4e4;
width: 100%;
height: 30px;
`

interface ProgressProps {
    value:number
}

export const Progress = styled.div<ProgressProps>`
background-color: #5DE290;
width: ${props => `${props.value}%`};
height: 100%;
`
