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
  //Mozilla
  ::-moz-scrollbar {
    width: 3px;
  }

  ::-moz-scrollbar-thumb {
    background-color: ${(props) =>
      props.theme ? props.theme.destaque : "none"};
  }

  ::-moz-scrollbar-track {
    background-color: none;
  }

  //Chrome
  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) =>
      props.theme ? props.theme.destaque : "none"};
    border-radius: 2px;
  }

  ::-webkit-scrollbar-track {
    background-color: none;
  }

  scrollbar-color: ${(props) =>
    props.theme ? `${props.theme.destaque} ${props.theme.primary}` : "none"};
  scrollbar-width: thin;
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
