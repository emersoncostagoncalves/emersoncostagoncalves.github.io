import styled from 'styled-components'

export const Container = styled.main`
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
        width: 100%;
        height: 100%;
        max-height: 100%;
        padding: 1.5rem;
    }
`


