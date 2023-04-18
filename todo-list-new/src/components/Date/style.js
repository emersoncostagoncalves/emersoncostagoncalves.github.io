import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  align-items: ${(props) => (props.align ? props.align : "flex-start")};
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
  gap: ${(props) => (props.gap ? `${props.gap}rem` : 0)};
  color: ${(props) => props.theme.text};
  h1 {
    font-size: 3rem;
    font-weight: 900;
  }
  h2 {
    font-size: 2rem;
    font-weight: 900;
  }
`;
