import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: ${(props) => (props.gap ? `${props.gap}rem` : 0)};
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  align-items: ${(props) => (props.align ? props.align : "flex-start")};
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
  gap: ${(props) => (props.gap ? `${props.gap}rem` : 0)};
  background-color: ${(props) =>
    props.theme && props.bg !== "none" ? props.theme.primary : "none"};
  color: ${(props) => (props.theme ? props.theme.text : "none")};
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.5rem;
  }
`;

export const Bar = styled.div`
  width: ${(props) => (props.width ? `${props.width}%` : "0%")};
  height: ${(props) => (props.height ? `${props.height}px` : "0px")};
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  align-items: ${(props) => (props.align ? props.align : "flex-start")};
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
  background-color: #3ad33a;
  padding: ${(props) => (props.p ? `${props.p}rem` : "0rem")};
`;
