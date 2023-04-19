import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.primary};
`;
export const Container = styled.div`
  width: 70%;
  height: 70%;
  max-width: 1000px;
  background-color: ${(props) => props.theme.secondary};
  box-shadow: -10px 0px 20px rgba(0, 0, 0, 0.1),
    10px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  box-sizing: border-box;
  overflow: hidden;
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`;
