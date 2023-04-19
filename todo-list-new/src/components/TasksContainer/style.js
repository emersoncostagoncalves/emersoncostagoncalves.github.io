import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 53%;
  gap: ${(props) => (props.gap ? props.gap + "rem" : "none")};
  margin-top: 1rem;
  overflow-y: scroll;
  p {
    color: ${(props) => (props.theme ? props.theme.text : "none")};
    span {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => (props.width ? props.width + "%" : "none")};
  padding: ${(props) => (props.p ? props.p + "rem" : "none")};
  color: ${(props) => (props.theme ? props.theme.text : "none")};
  gap: ${(props) => (props.gap ? props.gap + "rem" : "none")};
  p {
    text-decoration: ${(props) =>
      props.done === true ? "line-through" : "none"};
  }
  svg {
    color: ${(props) => (props.theme ? props.theme.primary : "none")};
  }
  svg:hover {
    color: ${(props) => (props.theme ? props.theme.text : "none")};
  }
`;

export const Task = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: ${(props) => (props.p ? props.p + "rem" : "none")};
  color: ${(props) => (props.theme ? props.theme.text : "none")};
  border: ${(props) =>
    props.theme ? "1px solid" + props.theme.primary : "none"};
  gap: ${(props) => (props.gap ? props.gap + "rem" : "none")};
  p {
    text-decoration: ${(props) =>
      props.done === true ? "line-through" : "none"};
  }
`;
