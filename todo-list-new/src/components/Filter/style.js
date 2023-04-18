import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 1rem 0rem;
  width: 100%;
  gap: ${(props) => (props.gap ? props.gap + "rem" : "none")};
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.theme ? props.theme.primary : "none")};
  color: ${(props) => (props.theme ? props.theme.text : "none")};
  border: ${(props) =>
    props.active
      ? "1px solid" + props.theme.destaque
      : "1px solid" + props.theme.primary};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${(props) => (props.gap ? props.gap + "rem" : "none")};
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${(props) => (props.height ? props.height + "px" : "none")};
  gap: ${(props) => (props.gap ? props.gap + "rem" : "none")};
  border: ${(props) => (props.theme ? "1px solid" + props.theme.text : "none")};
  padding: 0.5rem;
  input {
    background-color: transparent;
    border: none;
    height: 100%;
    width: 100%;
    outline: none;
    color: ${(props) => (props.theme ? props.theme.text : "none")};
  }
  svg {
    color: ${(props) => (props.theme ? props.theme.text : "none")};

    path {
      stroke: ${(props) => (props.theme ? props.theme.text : "none")};
    }
  }
`;
