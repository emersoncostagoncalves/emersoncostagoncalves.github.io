import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: ${(props) => (props.height ? props.height + "px" : "none")};
  border: ${(props) => (props.theme ? props.theme.text : "none")};
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => (props.height ? props.height + "px" : "none")};
  gap: ${(props) => (props.gap ? props.gap + "rem" : "none")};
  padding: ${(props) => (props.p ? props.p + "rem" : "none")};
  background-color: ${(props) => (props.theme ? props.theme.primary : "none")};
  svg {
    path {
      stroke: ${(props) => (props.theme ? props.theme.destaque : "none")};
    }
  }
`;

export const InputTask = styled.input`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${(props) => (props.theme ? props.theme.text : "none")};
`;

export const AddButton = styled.div``;
